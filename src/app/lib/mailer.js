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
      .header img {
        width: 150px;
        margin-bottom: 10px;
      }
      .header h1 {
        color: #4CAF50;
        margin: 0;
        font-size: 28px;
      }
      .content {
        font-size: 16px;
        color: #555555;
        line-height: 1.6;
      }
      .otp {
        font-size: 24px;
        font-weight: bold;
        color: #333333;
        margin: 20px 0;
        text-align: center;
      }
      .footer {
        text-align: center;
        font-size: 14px;
        color: #999999;
        padding-top: 20px;
        border-top: 1px solid #e0e0e0;
        margin-top: 30px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="YOUR_LOGO_URL" alt="JSMaster Logo" />
        <h1>JSMaster</h1>
      </div>
      <div class="content">
        <p>Dear ${username},</p>
        <p>Thank you for registering with JSMaster. To complete your registration, please use the following OTP:</p>
        <div class="otp">${otp}</div>
        <p>This OTP is valid for 2 minutes. If you did not request this, please ignore this email.</p>
      </div>
      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} JSMaster. All rights reserved.</p>
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
