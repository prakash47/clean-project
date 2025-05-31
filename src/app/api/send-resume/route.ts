import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Readable } from 'stream';

export async function POST(request: NextRequest) {
  try {
    console.log('Received POST request to /api/send-resume');

    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const resume = formData.get('resume') as File;
    const recaptchaToken = request.headers.get('X-Recaptcha-Token');

    console.log('Form data:', { name, email, phone, position, resume: resume ? resume.name : null, recaptchaToken });

    if (!name || !email || !phone || !position || !resume || !recaptchaToken) {
      console.error('Missing required fields');
      return NextResponse.json({ message: 'All fields and reCAPTCHA token are required' }, { status: 400 });
    }

    // Validate reCAPTCHA token
    console.log('Validating reCAPTCHA token...');
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY!,
        response: recaptchaToken,
      }).toString(),
    });

    const recaptchaData = await recaptchaResponse.json();
    console.log('reCAPTCHA response:', recaptchaData);
    if (!recaptchaData.success) {
      console.error('reCAPTCHA verification failed:', recaptchaData['error-codes']);
      return NextResponse.json({ message: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    // Convert the resume file to a Buffer
    console.log('Converting resume file to buffer...');
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());
    const resumeStream = new Readable();
    resumeStream.push(resumeBuffer);
    resumeStream.push(null);

    // Configure Nodemailer transporter
    console.log('Configuring Nodemailer transporter...');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP connection
    await transporter.verify();
    console.log('SMTP connection verified');

    // Email to company
    const companyMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO_EMAIL,
      subject: `Job Application: ${position} - ${name}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p>Please find the applicant's resume attached.</p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: resumeStream,
          contentType: 'application/pdf',
        },
      ],
    };

    // Email to candidate (confirmation)
    const candidateMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Application Confirmation for ${position} - Intention Infoservice`,
      html: `
        <h2>Thank You for Applying!</h2>
        <p>Dear ${name},</p>
        <p>We have successfully received your application for the position of <strong>${position}</strong> at Intention Infoservice.</p>
        <p>We will review your application and get back to you soon. If you have any questions, feel free to reach out to us.</p>
        <p>Best regards,<br/>The Intention Infoservice Team</p>
      `,
    };

    // Send both emails
    console.log('Sending emails...');
    await Promise.all([
      transporter.sendMail(companyMailOptions).then(() => console.log('Company email sent')),
      transporter.sendMail(candidateMailOptions).then(() => console.log('Candidate email sent')),
    ]);

    console.log('Emails sent successfully');
    return NextResponse.json({ message: 'Application submitted successfully!' }, { status: 200 });
  } catch (error: any) {
    console.error('Detailed error in /api/send-resume:', error.message, error.stack);
    return NextResponse.json({ message: 'Failed to submit application: ' + error.message }, { status: 500 });
  }
}