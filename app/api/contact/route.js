import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact directly.' },
        { status: 500 }
      );
    }

    // Create a transporter using Gmail SMTP with more specific configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'varunbali47@gmail.com',
      subject: `Portfolio Contact: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #00ff99; padding-bottom: 10px;">New Portfolio Contact</h2>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 15px;">Contact Information:</h3>
              <p style="margin: 10px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 15px;">Message:</h3>
              <div style="background-color: #f8f8f8; padding: 15px; border-radius: 5px; border-left: 4px solid #00ff99;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #888; font-size: 12px;">
              <p>This message was sent from your portfolio website contact form.</p>
            </div>
          </div>
        </div>
      `,
      text: `
        New Portfolio Contact
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        ${phone ? `Phone: ${phone}` : ''}
        
        Message:
        ${message}
        
        This message was sent from your portfolio website contact form.
      `,
      replyTo: email, // Allow you to reply directly to the sender
    };

    // Test the connection first
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Detailed error sending email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check credentials.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Connection failed. Please check your internet connection.';
    } else if (error.responseCode === 535) {
      errorMessage = 'Invalid email credentials. Please use App Password.';
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}