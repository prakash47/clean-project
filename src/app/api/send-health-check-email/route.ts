import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import axios from 'axios';
import { google } from 'googleapis';

// Rate limiter: 5 requests per minute per IP
const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 60, // 60 seconds
});

// Helper function to verify reCAPTCHA v2 with timeout
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY environment variable is not set');
    return false;
  }
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5-second timeout
    const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      {
        params: {
          secret: secretKey,
          response: token,
        },
        signal: controller.signal,
      }
    );
    clearTimeout(timeout);
    return response.data.success;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

// Lazy-initialize the Google Sheets client to avoid build-time execution
let sheetsClient: ReturnType<typeof google.sheets> | null = null;

const initializeSheetsClient = () => {
  if (sheetsClient) {
    return sheetsClient;
  }

  const credentials = process.env.GOOGLE_SHEETS_CREDENTIALS;
  if (!credentials) {
    console.error('GOOGLE_SHEETS_CREDENTIALS environment variable is not set');
    return null;
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(credentials),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    sheetsClient = google.sheets({ version: 'v4', auth });
    return sheetsClient;
  } catch (error) {
    console.error('Failed to initialize Google Sheets client:', error);
    return null;
  }
};

// Utility function for retry with exponential backoff (reduced retries)
const retryWithBackoff = async <T>(
  operation: () => Promise<T>,
  maxRetries: number = 1, // Reduced from 3 to 1
  baseDelay: number = 1000
): Promise<T | null> => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error: unknown) {
      if (attempt === maxRetries) {
        console.error(`Operation failed after ${maxRetries} attempts:`, error);
        return null;
      }
      const delay = baseDelay * Math.pow(2, attempt - 1); // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  return null;
};

export async function POST(req: NextRequest) {
  console.log('Received request to /api/send-health-check-email');

  const body = await req.json();
  const { name, email, website, phone, recaptchaToken } = body;

  console.log('Request body:', body);

  // Validate required fields
  if (!name || !email || !recaptchaToken) {
    console.warn('Missing required fields:', { name, email, recaptchaToken });
    return NextResponse.json({ message: 'Missing required fields: name, email, and recaptchaToken are required' }, { status: 400 });
  }

  // Rate limiting
  try {
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    await rateLimiter.consume(clientIp);
    console.log('Rate limit passed for IP:', clientIp);
  } catch (error) {
    console.warn('Rate limit exceeded:', error);
    return NextResponse.json({ message: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  // Initialize nodemailer transporter
  let transporter: nodemailer.Transporter | null = null;
  const appPassword = process.env.SMTP_PASS;
  if (!appPassword) {
    console.warn('SMTP_PASS environment variable is not set, skipping email sending');
  } else {
    try {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: false,
        auth: {
          user: process.env.SMTP_USER || 'contact@intentioninfoservice.com',
          pass: appPassword,
        },
      });
      console.log('Nodemailer transporter created');
    } catch (error) {
      console.error('Failed to create nodemailer transporter:', error);
      transporter = null;
    }
  }

  // Extract first name for confirmation email
  const firstName = name.split(' ')[0] || name;

  // Admin email with HTML template
  const adminMailOptions = {
    from: '"Intention Infoservice" <contact@intentioninfoservice.com>',
    to: 'contact@intentioninfoservice.com',
    subject: 'New Website Health Check Request',
    text: `
      New Website Health Check Request

      Name: ${name}
      Email: ${email}
      Website: ${website || 'Not provided'}
      Phone: ${phone || 'Not provided'}
      Submission Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Website Health Check Request</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          .header {
            background-color: #1a3c34;
            color: #ffffff;
            padding: 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 20px;
          }
          .content p {
            margin: 10px 0;
            font-size: 16px;
            color: #333333;
          }
          .content .label {
            font-weight: bold;
            color: #1a3c34;
          }
          .footer {
            background-color: #f4f4f4;
            padding: 10px;
            text-align: center;
            font-size: 14px;
            color: #777777;
          }
          .footer a {
            color: #1a3c34;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Website Health Check Request</h1>
          </div>
          <div class="content">
            <p><span class="label">Name:</span> ${name}</p>
            <p><span class="label">Email:</span> ${email}</p>
            <p><span class="label">Website:</span> ${website || 'Not provided'}</p>
            <p><span class="label">Phone:</span> ${phone || 'Not provided'}</p>
            <p><span class="label">Submission Time:</span> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
          <div class="footer">
            <p>Intention Infoservice | <a href="mailto:contact@intentioninfoservice.com">contact@intentioninfoservice.com</a> | +91 7021539267</p>
            <p><a href="https://www.intentioninfoservice.com">www.intentioninfoservice.com</a></p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  // User confirmation email with HTML template
  const userMailOptions = {
    from: '"Intention Infoservice" <contact@intentioninfoservice.com>',
    to: email,
    subject: 'Thank You for Requesting a Website Health Check!',
    text: `
      Dear ${firstName},

      Thank you for requesting a free website health check from Intention Infoservice! We’ve successfully received your request, and we’re excited to help optimize your website.

      At Intention Infoservice, we specialize in ensuring your website is secure, fast, and optimized for success. Our team will analyze your site and provide a detailed report to help you achieve your digital goals.

      What’s Next?
      - Our team will review your request and get back to you within 24-48 hours with your free website health report.
      - Feel free to reply to this email for immediate assistance.

      Thank you for choosing Intention Infoservice as your trusted partner in website maintenance. We look forward to assisting you!

      Best Regards,
      Intention Infoservice
      contact@intentioninfoservice.com | +91 7021539267
      www.intentioninfoservice.com
    `,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Your Website Health Check Request</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          .header {
            background-color: #1a3c34;
            color: #ffffff;
            padding: 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 20px;
          }
          .content p {
            margin: 10px 0;
            font-size: 16px;
            color: #333333;
            line-height: 1.6;
          }
          .content h2 {
            font-size: 20px;
            color: #1a3c34;
            margin-top: 0;
          }
          .content h3 {
            font-size: 18px;
            color: #1a3c34;
            margin-bottom: 10px;
          }
          .content ul {
            padding-left: 20px;
            margin: 10px 0;
          }
          .content ul li {
            font-size: 16px;
            color: #333333;
            margin-bottom: 10px;
          }
          .footer {
            background-color: #f4f4f4;
            padding: 10px;
            text-align: center;
            font-size: 14px;
            color: #777777;
          }
          .footer a {
            color: #1a3c34;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Your Request</h1>
          </div>
          <div class="content">
            <h2>Dear ${firstName},</h2>
            <p>Thank you for requesting a free website health check from <strong>Intention Infoservice</strong>! We’ve successfully received your request, and we’re excited to help optimize your website.</p>
            <p>At Intention Infoservice, we specialize in ensuring your website is secure, fast, and optimized for success. Our team will analyze your site and provide a detailed report to help you achieve your digital goals.</p>
            <h3>What’s Next?</h3>
            <ul>
              <li>Our team will review your request and get back to you within 24-48 hours with your free website health report.</li>
              <li>Feel free to reply to this email for immediate assistance.</li>
            </ul>
            <p>Thank you for choosing Intention Infoservice as your trusted partner in website maintenance. We look forward to assisting you!</p>
          </div>
          <div class="footer">
            <p><strong>Best Regards,</strong><br />
            Intention Infoservice<br />
            <a href="mailto:contact@intentioninfoservice.com">contact@intentioninfoservice.com</a> | +91 7021539267<br />
            <a href="https://www.intentioninfoservice.com">www.intentioninfoservice.com</a></p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    // Verify reCAPTCHA
    console.log('Starting reCAPTCHA verification');
    const recaptchaPromise = verifyRecaptcha(recaptchaToken).then(isValid => {
      if (!isValid) throw new Error('reCAPTCHA verification failed');
      return true;
    });

    // Send emails if transporter is available
    let emailPromise: Promise<boolean> = Promise.resolve(false);
    if (transporter) {
      console.log('Starting email sending');
      emailPromise = retryWithBackoff(() =>
        Promise.all([
          transporter.sendMail(adminMailOptions),
          transporter.sendMail(userMailOptions),
        ])
      ).then(result => {
        if (result) {
          console.log('Emails sent successfully');
          return true;
        }
        console.warn('Email sending failed');
        return false;
      });
    } else {
      console.warn('No email transporter available, skipping email sending');
    }

    // Append to Google Sheets
    let sheetsPromise: Promise<boolean> = Promise.resolve(false);
    const sheets = initializeSheetsClient();
    if (!sheets) {
      console.warn('Google Sheets client initialization failed, skipping Google Sheets integration');
    } else {
      const spreadsheetId = process.env.GOOGLE_SHEET_ID;
      if (!spreadsheetId) {
        console.warn('GOOGLE_SHEET_ID environment variable is not set, skipping Google Sheets integration');
      } else {
        console.log('Starting Google Sheets integration');
        const timestamp = new Date().toISOString();
        const values = [
          [
            timestamp, // Date
            name,
            email,
            website || 'Not provided',
            phone || 'Not provided',
          ],
        ];

        sheetsPromise = retryWithBackoff(() =>
          sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Health Check Submission!A:E', // Changed to new tab
            valueInputOption: 'RAW',
            requestBody: {
              values,
            },
          })
        ).then(result => {
          if (result) {
            console.log('Data successfully sent to Google Sheets');
            return true;
          }
          console.warn('Failed to send data to Google Sheets');
          return false;
        });
      }
    }

    // Run all operations in parallel
    const [recaptchaSuccess, emailSuccess, sheetsSuccess] = await Promise.all([
      recaptchaPromise,
      emailPromise,
      sheetsPromise,
    ]);

    // Check reCAPTCHA result after parallel execution
    if (!recaptchaSuccess) {
      console.warn('reCAPTCHA verification failed after parallel execution');
      return NextResponse.json({ message: 'reCAPTCHA verification failed. Please try again.', error: 'Invalid reCAPTCHA token' }, { status: 400 });
    }

    // Return success if either email sending or Google Sheets succeeded
    if (emailSuccess || sheetsSuccess) {
      console.log('Health check request processed successfully');
      return NextResponse.json({ message: 'Health check request processed successfully' }, { status: 200 });
    } else {
      console.error('Both email sending and Google Sheets integration failed');
      return NextResponse.json({ message: 'Failed to process health check request: Both email and Google Sheets operations failed' }, { status: 500 });
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Unexpected error processing health check request:', errorMessage);
    return NextResponse.json({ message: 'Failed to process health check request', error: errorMessage }, { status: 500 });
  }
}