import dbConnect from '../../app/lib/mongodb';
import User from '../../app/models/User';
import bcrypt from 'bcryptjs';
import { sendOtpEmail } from '../../app/lib/mailer';
import validate from 'deep-email-validator'


const OTP_EXPIRY = 2 * 60 * 1000;

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        const { username, email, password, phone, gender } = req.body;

        let valid = await validate(email)
        if (!valid.valid) {
            return res.status(400).json({ message: 'Given  email is not valid' })
        }
        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            const otpExpiry = Date.now() + OTP_EXPIRY;

            const newUser = new User({
                username,
                email,
                password: hashedPassword,
                phone,
                gender,
                otp,
                otpExpiry,
                isVerified: false,
            });

            await newUser.save();
            await sendOtpEmail(email, otp);
            res.status(201).json({ message: 'OTP sent to email. Please verify your email address.' });
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
