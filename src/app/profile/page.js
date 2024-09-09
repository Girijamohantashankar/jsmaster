"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import "../../../styles/profile.css";
import HomeNavbar from "../home-navbar/page";

export default function ProfilePage() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        profilePicture: '/assets/default_profile.png',
        bio: '',
    });
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({ ...user });

    useEffect(() => {
        const fetchUserData = async () => {
            const fetchedUser = {
                name: 'John Doe',
                email: 'john.doe@example.com',
                profilePicture: '/assets/default_profile.png',
                bio: 'A short bio about John Doe',
            };
            setUser(fetchedUser);
            setFormData(fetchedUser);
        };
        
        fetchUserData();
    }, []);

    const handleEdit = () => {
        setEditing(!editing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        setUser(formData);
        setEditing(false);
    };

    return (
        <>
            <HomeNavbar />
            <div className="profile_container">
                <div className="profile_header">
                    <div className="profile_picture">
                        <Image
                            src={user.profilePicture}
                            alt="Profile Picture"
                            width={150}
                            height={150}
                            className="profile_img"
                        />
                    </div>
                    <div className="profile_info">
                        {editing ? (
                            <>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="profile_input"
                                />
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    className="profile_textarea"
                                />
                            </>
                        ) : (
                            <>
                                <h2>{user.name}</h2>
                                <p>{user.email}</p>
                                <p>{user.bio}</p>
                            </>
                        )}
                        <button onClick={editing ? handleSave : handleEdit} className="profile_button">
                            {editing ? 'Save' : 'Edit Profile'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
