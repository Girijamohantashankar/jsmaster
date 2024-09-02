"use client";
import { useState, useEffect } from 'react';
import "../../../styles/community.css";
import HomeNavbar from "../home-navbar/page";
import Modal from '../communityCard/page';
import Image from 'next/image';

export default function Community() {
    const [modalOpen, setModalOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [expandedPost, setExpandedPost] = useState(null);

    const toggleModal = () => setModalOpen(prev => !prev);
    const addPost = (newPost) => {
        setPosts(prevPosts => [...prevPosts, newPost]);
        toggleModal();
    };

    const toggleReadMore = () => setIsExpanded(prev => !prev);

    const toggleAnswer = (postId) => {
        setExpandedPost(prevPostId => (prevPostId === postId ? null : postId));
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/showposts');
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data.posts);
                } else {
                    console.error('Failed to fetch posts');
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            <HomeNavbar />
            <div className="community_container">
                <h1>Y<span className='or'>our</span> Qu<span className='or'>ery</span> Po<span className='or'>st</span>s</h1>
                <p className={`community_para ${isExpanded ? 'expanded' : ''}`}>
                    In this community, you can share any JavaScript-related problems,
                    issues, or errors that you are facing in your code or project.
                    Whether its a bug, a question about best practices, or a challenge you are stuck on,
                    feel free to post your query here. Our community is here to help you troubleshoot,
                    brainstorm, and collaborate on solutions to your coding problems.
                </p>
                <span className="read_more" onClick={toggleReadMore}>
                    {isExpanded ? 'Read Less' : 'Read More'}
                </span>

                <div className="community_post">
                    <button className="add_post_button" onClick={toggleModal}>
                        <i className="fa-solid fa-plus"></i> Post
                    </button>

                    <div className="post_cards">
                        {posts.map(post => (
                            <div key={post._id} className="post_card">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    width={300}  
                                    height={200} 
                                    layout="responsive" 
                                />
                                <h3>{post.title}</h3>
                                <p>{post.description}</p>
                                <button onClick={() => toggleAnswer(post._id)}>
                                    {expandedPost === post._id ? 'Hide Answer' : 'Show Answer'}
                                </button>
                                {expandedPost === post._id && (
                                    <div className="answer_section">
                                        {post.answer.length > 0 ? (
                                            post.answer.map((ans, index) => (
                                                <p key={index}>{ans}</p>
                                            ))
                                        ) : (
                                            <p>Answer is not available</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {modalOpen && <Modal onClose={toggleModal} onAddPost={addPost} />}
            </div>
        </>
    );
}
