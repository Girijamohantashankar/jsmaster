// pages/api/verify-token.js
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET; // Make sure to set this in your environment variables

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { token } = req.body;

        if (!token) {
            return res.status(400).json({ message: 'Token is required' });
        }

        try {
            // Verify the token
            const decoded = jwt.verify(token, JWT_SECRET);

            // Token is valid
            res.status(200).json({ valid: true, user: decoded });
        } catch (error) {
            console.error('Token verification error:', error);
            // Token is invalid or expired
            res.status(401).json({ valid: false, message: 'Invalid or expired token' });
        }
    } else {
        // Method not allowed
        res.status(405).json({ message: 'Method not allowed' });
    }
}
