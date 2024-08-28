"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TokenValidation({ redirectTo = '/home' }) {
    const router = useRouter();
    const [isTokenChecked, setIsTokenChecked] = useState(false);

    useEffect(() => {
        const checkToken = async () => {
            console.log('Checking token...'); // Debugging line
            const token = localStorage.getItem('token');
            console.log('Retrieved token:', token); // Debugging line

            if (token) {
                try {
                    const response = await fetch('/api/verify-token', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ token }),
                    });
                    const data = await response.json();
                    console.log('Token verification response:', data); // Debugging line

                    if (data.valid) {
                        if (window.location.pathname !== redirectTo) {
                            console.log('Redirecting to:', redirectTo); // Debugging line
                            router.push(redirectTo);
                        }
                    } else {
                        console.log('Token is invalid or expired'); // Debugging line
                    }
                } catch (error) {
                    console.error('Token verification failed:', error);
                }
            }
            setIsTokenChecked(true);
        };

        checkToken();
    }, [router, redirectTo]);

    return null;
}
