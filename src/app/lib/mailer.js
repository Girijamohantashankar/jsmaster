import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOtpEmail = async (email, otp) => {
  const emailTemplate = `
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          padding-bottom: 20px;
        }
        .header h1 {
          color: #333333;
        }
        .content {
          font-size: 16px;
          color: #555555;
        }
        .otp {
          font-size: 24px;
          font-weight: bold;
          color: #333333;
          margin: 20px 0;
        }
        .footer {
          text-align: center;
          font-size: 14px;
          color: #999999;
          padding-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>JS Master</h1>
        </div>
        <div class="content">
          <p>Dear User,</p>
          <p>Thank you for registering with JS Master. Please use the following OTP to complete your registration:</p>
          <div class="otp">${otp}</div>
          <p>This OTP is valid for 2 minute. If you did not request this, please ignore this email.</p>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} JS Master. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP Code from JS Master',
      html: emailTemplate,
    });
  } catch (error) {
    console.error('Error sending OTP email:', error);
    if (error.responseCode === 550) {
      throw new Error('Address not found or invalid email address. Please check and try again.');
    }
    if (error.responseCode === 551) {
      throw new Error('Mailbox unavailable. Please check the email address and try again.');
    }
    throw new Error('Failed to send OTP. Please check the email address and try again.');
  }
};
