import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import axios from 'axios';

// Rate limiter: 5 requests per minute per IP
const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 60, // 60 seconds
});

// Helper function to verify reCAPTCHA
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY || 'your-recaptcha-secret-key';
  try {
    const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
      params: {
        secret: secretKey,
        response: token,
      },
    });
    return response.data.success && response.data.score >= 0.5;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

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

  // Verify reCAPTCHA
  const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
  if (!isRecaptchaValid) {
    return NextResponse.json({ message: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 });
  }

  // Create transporter with Gmail SMTP configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for 587
    auth: {
      user: 'contact@intentioninfoservice.com',
      pass: 'ljgvbkwbldxanmym',
    },
  });

  // Extract first name for confirmation email
  const firstName = name.split(' ')[0] || name;

  // Form submission email to admin
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
      Service or Purpose of Enquiry: ${service}
      Project Requirements: ${requirements}
      Preferred Contact Method: ${contactMethod}
      Privacy Policy Agreement: ${agreePrivacy ? 'Agreed' : 'Not Agreed'}
      Submission Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `,
    html: `
      <h2>New Contact Form Submission from Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Service or Purpose of Enquiry:</strong> ${service}</p>
      <p><strong>Project Requirements:</strong> ${requirements}</p>
      <p><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
      <p><strong>Privacy Policy Agreement:</strong> ${agreePrivacy ? 'Agreed' : 'Not Agreed'}</p>
      <p><strong>Submission Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
    `,
  };

  // Confirmation email to user
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
      contact@intentioninfoservice.com | +91 7039550278
      www.intentioninfoservice.com
    `,
    html: `
      <h2>Dear ${firstName},</h2>
      <p>Thank you for contacting Intention Infoservice! We’ve successfully received your inquiry from our Contact Us page, and we’re excited to connect with you.</p>
      <p>At Intention Infoservice, we specialize in delivering innovative web design, mobile app development, UI/UX branding services, digital marketing, and custom software solutions tailored to your business needs. Whether you’re looking to build a stunning website, launch a cutting-edge mobile app, or transform your digital presence, our team is here to bring your vision to life.</p>
      <h3>What’s Next?</h3>
      <ul>
        <li>Our team will review your message and get back to you within 24-48 hours.</li>
        <li>If you provided specific details about your project, we’ll prepare tailored recommendations to meet your goals.</li>
        <li>Feel free to reply to this email for immediate assistance.</li>
      </ul>
      <p>Thank you for choosing Intention Infoservice as your trusted partner in innovation. We look forward to collaborating with you!</p>
      <p><strong>Best Regards,</strong><br />
      Intention Infoservice<br />
      <a href="mailto:contact@intentioninfoservice.com">contact@intentioninfoservice.com</a> | +91 7039550278<br />
      <a href="https://www.intentioninfoservice.com">www.intentioninfoservice.com</a></p>
    `,
  };

  try {
    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);
    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json({ message: 'Failed to send emails' }, { status: 500 });
  }
}