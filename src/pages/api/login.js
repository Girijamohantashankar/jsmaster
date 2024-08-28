import dbConnect from '../../app/lib/mongodb';
import User from '../../app/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; 

const JWT_SECRET = process.env.JWT_SECRET; 

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            const token = jwt.sign(
                { id: user._id, email: user.email },
                JWT_SECRET,
                { expiresIn: '1h' } 
            );

            res.status(200).json({ message: 'Login successful', token });
        } catch (error) {
            console.error('Error logging in:', error);
            res.status(500).json({ message: 'Server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
