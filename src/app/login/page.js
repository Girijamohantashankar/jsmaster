"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "../../../styles/auth.css";
import Loader from "../loader/page"; 
import Link from 'next/link'; 

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message);
                toast.error(data.message);
            } else {
                toast.success('Login successful!');
                localStorage.setItem('token', data.token);
                router.push('/home'); 
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
            toast.error('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="Auth_container">
            {loading && <Loader />}
            <div className="Auth_header">
                <h1>Login</h1>
            </div>
            <form onSubmit={handleSubmit} className="Auth_form">
                <div className="Auth_inputGroup">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="Auth_inputGroup">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="Auth_button" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <p className="Auth_footer">
                Do not have an account? <Link href="/signup">Sign up</Link>
            </p>
            <p className="Auth_footer">
                <Link href="/forgot-password" className='forgot_link'>Forgot Password?</Link>
            </p>
            <ToastContainer />
        </div>
    );
}
