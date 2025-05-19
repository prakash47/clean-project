import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import axios from 'axios';

// Rate limiter: 5 requests per minute per IP
const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 60, // 60 seconds
});

// Helper function to verify reCAPTCHA v2
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    throw new Error('RECAPTCHA_SECRET_KEY environment variable is not set');
  }
  try {
    const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
      params: {
        secret: secretKey,
        response: token,
      },
    });
    return response.data.success;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

// Utility function for retry with exponential backoff
const retryWithBackoff = async <T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error: unknown) {
      if (attempt === maxRetries) {
        throw error;
      }
      const delay = baseDelay * Math.pow(2, attempt - 1); // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  throw new Error('Max retries reached');
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, company, service, requirements, contactMethod, agreePrivacy, recaptchaToken } = body;

  // Validate required fields
  if (!name || !email || !phone || !requirements || !service || !recaptchaToken) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  // Rate limiting
  try {
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    await rateLimiter.consume(clientIp);
  } catch (error) {
    return NextResponse.json({ message: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  // Verify reCAPTCHA v2
  const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
  if (!isRecaptchaValid) {
    return NextResponse.json({ message: 'reCAPTCHA verification failed. Please try again.', error: 'Invalid reCAPTCHA token' }, { status: 400 });
  }

  // Create transporter with Gmail SMTP configuration
  const appPassword = process.env.GMAIL_APP_PASSWORD;
  if (!appPassword) {
    return NextResponse.json({ message: 'Failed to send emails', error: 'GMAIL_APP_PASSWORD environment variable is not set' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for 587
    auth: {
      user: 'contact@intentioninfoservice.com',
      pass: appPassword,
    },
  });

  // Extract first name for confirmation email
  const firstName = name.split(' ')[0] || name;

  // Convert service array to a readable string for text email
  const serviceText = Array.isArray(service) ? service.join(', ') : service;

  // Generate HTML list for services
  const serviceListHtml = Array.isArray(service)
    ? `<ul style="padding-left: 20px; margin: 10px 0;">${service.map((s: string) => `<li>${s}</li>`).join('')}</ul>`
    : `<p>${service}</p>`;

  // Form submission email to admin with HTML template
  const adminMailOptions = {
    from: '"Intention Infoservice" <contact@intentioninfoservice.com>',
    to: 'contact@intentioninfoservice.com',
    subject: 'New Contact Form Submission from Website',
    text: `
      New Contact Form Submission from Website

      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company: ${company}
      Service or Purpose of Enquiry: ${serviceText}
      Project Requirements: ${requirements}
      Preferred Contact Method: ${contactMethod}
      Privacy Policy Agreement: ${agreePrivacy ? 'Agreed' : 'Not Agreed'}
      Submission Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
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
          .content ul {
            padding-left: 20px;
            margin: 10px 0;
          }
          .content ul li {
            font-size: 16px;
            color: #333333;
            margin-bottom: 5px;
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
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <p><span class="label">Name:</span> ${name}</p>
            <p><span class="label">Email:</span> ${email}</p>
            <p><span class="label">Phone:</span> ${phone}</p>
            <p><span class="label">Company:</span> ${company}</p>
            <p><span class="label">Service or Purpose of Enquiry:</span></p>
            ${serviceListHtml}
            <p><span class="label">Project Requirements:</span> ${requirements}</p>
            <p><span class="label">Preferred Contact Method:</span> ${contactMethod}</p>
            <p><span class="label">Privacy Policy Agreement:</span> ${agreePrivacy ? 'Agreed' : 'Not Agreed'}</p>
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

  // Confirmation email to user with HTML template
  const userMailOptions = {
    from: '"Intention Infoservice" <contact@intentioninfoservice.com>',
    to: email,
    subject: 'Thank You for Reaching Out to Intention Infoservice!',
    text: `
      Dear ${firstName},

      Thank you for contacting Intention Infoservice! We’ve successfully received your inquiry from our Contact Us page, and we’re excited to connect with you.

      At Intention Infoservice, we specialize in delivering innovative web design, mobile app development, UI/UX branding services, digital marketing, and custom software solutions tailored to your business needs. Whether you’re looking to build a stunning website, launch a cutting-edge mobile app, or transform your digital presence, our team is here to bring your vision to life.

      What’s Next?
      - Our team will review your message and get back to you within 24-48 hours.
      - If you provided specific details about your project, we’ll prepare tailored recommendations to meet your goals.
      - Feel free to reply to this email for immediate assistance.

      Thank you for choosing Intention Infoservice as your trusted partner in innovation. We look forward to collaborating with you!

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
        <title>Thank You for Your Enquiry</title>
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
            <h1>Thank You for Your Enquiry</h1>
          </div>
          <div class="content">
            <h2>Dear ${firstName},</h2>
            <p>Thank you for contacting <strong>Intention Infoservice</strong>! We’ve successfully received your inquiry from our Contact Us page regarding <strong>${serviceText}</strong>, and we’re excited to connect with you.</p>
            <p>At Intention Infoservice, we specialize in delivering innovative web design, mobile app development, UI/UX branding services, digital marketing, and custom software solutions tailored to your business needs. Whether you’re looking to build a stunning website, launch a cutting-edge mobile app, or transform your digital presence, our team is here to bring your vision to life.</p>
            <h3>What’s Next?</h3>
            <ul>
              <li>Our team will review your message and get back to you within 24-48 hours.</li>
              <li>If you provided specific details about your project, we’ll prepare tailored recommendations to meet your goals.</li>
              <li>Feel free to reply to this email for immediate assistance.</li>
            </ul>
            <p>Thank you for choosing Intention Infoservice as your trusted partner in innovation. We look forward to collaborating with you!</p>
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
    // Send both emails with retry logic
    await retryWithBackoff(() =>
      Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(userMailOptions),
      ])
    );
    console.log('Emails sent successfully');
    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Email sending failed:', errorMessage);
    return NextResponse.json({ message: 'Failed to send emails', error: errorMessage }, { status: 500 });
  }
}