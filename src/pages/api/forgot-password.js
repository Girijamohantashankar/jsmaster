import dbConnect from '../../app/lib/mongodb';
import User from '../../app/models/User';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        const { email } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const resetToken = crypto.randomBytes(32).toString('hex');
            const resetTokenExpires = Date.now() + 3600000;
            user.resetPasswordToken = resetToken;
            user.resetPasswordExpires = resetTokenExpires;
            await user.save();
            const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${resetToken}`;

            const transporter = nodemailer.createTransport({
                service: 'Gmail', 
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: user.email,
                subject: 'Password Reset',
                text: `You are receiving this email because you (or someone else) have requested the reset of your password. Please click the link below to reset your password:\n\n${resetUrl}`,
            };

            await transporter.sendMail(mailOptions);

            res.status(200).json({ message: 'Password reset link sent' });
        } catch (error) {
            console.error('Error sending reset link:', error);
            res.status(500).json({ message: 'Server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
