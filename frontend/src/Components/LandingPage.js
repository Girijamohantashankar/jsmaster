import React, { useEffect, useState } from 'react';
import "./LandingPage.css";
import certificateimage from "../assets/1_page-0001.jpg";
import CustomLoader from './Loader'; 

function LandingPage() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="LandingPage">
    {loading ? (
        <CustomLoader />
      ) : (
        <>
      <Header />
      <Intro />
      <CourseOutline />
      <Certificate />
      <Footer />
      </>
      )}
    </div>
  );
}

const Header = () => (
  <header>
    <h1>JS Master</h1>
  </header>
);

const Intro = () => (
  <div className="intro">
    <h2>Welcome to JS Master</h2>
    <p>JS Master is a problem practice site designed to help you learn JavaScript from beginner to advanced levels. Practice problems and improve your JavaScript skills progressively through hands-on experience.</p>
    <a href="#get-started" className="btn">Get Started</a>
  </div>
);

const CourseOutline = () => (
  <section id="course-outline" className="outline">
    <h2>Course Outline</h2>
    <ul>
      <li><strong>Beginner Level</strong>
        <ul>
          <li>Basic Syntax and Variables</li>
          <li>Control Structures</li>
          <li>Functions</li>
          <li>Objects and Arrays</li>
          <li>DOM Manipulation</li>
        </ul>
      </li>
      <li><strong>Intermediate Level</strong>
        <ul>
          <li>Advanced Functions</li>
          <li>Object-Oriented Programming</li>
          <li>Error Handling</li>
          <li>Web APIs</li>
          <li>Asynchronous JavaScript</li>
        </ul>
      </li>
      <li><strong>Advanced Level</strong>
        <ul>
          <li>Modules and Tooling</li>
          <li>Advanced DOM Manipulation</li>
          <li>Frameworks and Libraries</li>
          <li>Testing</li>
          <li>Performance Optimization</li>
          <li>Security</li>
        </ul>
      </li>
      <li><strong>Project-Based Learning</strong>
        <ul>
          <li>Mini Projects</li>
          <li>Capstone Project</li>
        </ul>
      </li>
    </ul>
  </section>
);

const Certificate = () => (
  <section id="certificate" className="certificate">
    <h2>Certificate of Completion</h2>
    <p>Upon completing the course, you will receive a Certificate of Completion. This certificate validates your knowledge and skills in JavaScript, demonstrating your ability to build and maintain JavaScript applications.</p>
    <div className="certificate-preview">
      <img src={certificateimage} alt="Certificate Preview" />
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <p>&copy; 2024 JS Master. All rights reserved.</p>
  </footer>
);

export default LandingPage;
