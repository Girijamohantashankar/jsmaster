"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "../../styles/navbar.css";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [userInitial, setUserInitial] = useState(null);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const fetchUserInitial = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setUserInitial(null);
                return;
            }

            try {
                const response = await fetch('/api/user-initial', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    setUserInitial(data.userInitial);
                } else {
                    setUserInitial(null);
                }
            } catch (error) {
                console.error('Error fetching user initial:', error);
                setUserInitial(null);
            }
        };

        fetchUserInitial();
    }, [router]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const isActiveLink = (path) => {
        return pathname === path ? "active" : "";
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUserInitial(null); 
        router.push('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link href="/home">JSMaster</Link>
            </div>
            <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
                <li><Link href="/courses" className={isActiveLink("/courses")}>Courses</Link></li>
                <li><Link href="/about" className={isActiveLink("/about")}>About Us</Link></li>
                {userInitial ? (
                    <>
                        <li><Link href="/blog" className={isActiveLink("/blog")}>Blog</Link></li>
                        <li><Link href="/community" className={isActiveLink("/community")}>Community</Link></li>
                        <li><Link href="/contact" className={isActiveLink("/contact")}>Contact Us</Link></li>
                        <li className="navbar-user" onClick={toggleDropdown}>
                            <span className="user-initial">{userInitial}</span>
                            <div className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
                                <Link href="/profile">Profile</Link>
                                <Link href="/settings">Settings</Link>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        </li>
                    </>
                ) : (
                    <li><Link href="/login" className="navbar-login login_btn">Login</Link></li>
                )}
            </ul>
            <div className="navbar-hamburger" onClick={toggleMobileMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
}
