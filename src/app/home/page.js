"use client";
import Link from "next/link";
import "../../../styles/home.css";
import HomeNavbar from "../home-navbar/page";
import Image from 'next/image';

export default function Home() {
    const categories = [
        {
            title: "Beginner",
            description: "Start your journey with beginner-friendly JavaScript problems.",
            imageUrl: "/assets/home_1.png",
            link: "/practice/beginner",
        },
        {
            title: "Intermediate",
            description: "Enhance your skills with intermediate-level challenges.",
            imageUrl: "/assets/home_2.png",
            link: "/practice/intermediate",
        },
        {
            title: "Advanced",
            description: "Master advanced concepts with tough JavaScript problems.",
            imageUrl: "/assets/home_3.png",
            link: "/practice/advanced",
        },
    ];

    return (
        <>
            <HomeNavbar />
            <div className="home_container">
                <h1>Welcome to JSMaster</h1>
                <p>Your one-stop platform to improve your JavaScript skills at all levels.</p>
                <div className="card_container">
                    {categories.map((category, index) => (
                        <div key={index} className="category_card">
                            <Image
                                src={category.imageUrl}
                                alt={category.title}
                                width={400}
                                height={200}
                                className="card_image"
                            />
                            <div className="card_content">
                                <h2>{category.title}</h2>
                                <p>{category.description}</p>
                                <Link href={category.link} className="card_button">
                                    Start Practicing
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
