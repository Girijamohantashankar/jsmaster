"use client"
import Image from "next/image";
import "../../styles/landing.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import certficate from "../../public/assets/certificate.jpg"


const images = [
  '/assets/banner1.png',
  '/assets/banner2.png',
  '/assets/banner3.png',
];



export default function Home() {
  return (
    <div className="home_container">
      <div className="hero_section">
        <div className="hero_image">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="swiper-container"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="slider_image">
                  <Image src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="hero_content">
            <h1>Wel<span>come</span> to <span>JSM</span>aster</h1>
            <p>Your journey to <span>mastering</span> JavaScr<span>ipt st</span>arts here.</p>
            <button className="cta_button">Get Started</button>
          </div>
        </div>
      </div>

      <div className="courses_section">
        <h2>Ou<span>r Cou</span>rses</h2>
        <div className="course_list">
          <div className="course_item">
            <h3>Java<span>Script</span> Ba<span>sic</span>s</h3>
            <p>Learn the <span>fundamentals</span> of JavaScript, the language that <span>powers</span> the web.</p>
          </div>
          <div className="course_item">
            <h3>Advan<span>ced</span> Jav<span>aScr</span>ipt</h3>
            <p>Deep dive into <span>advanced</span> concepts and <span>techniques</span> to become a JavaScript <span>expert</span>.</p>
          </div>
          <div className="course_item">
            <h3>Prac<span>tice Real</span> Ti<span>me Probl</span>ems</h3>
            <p>Enhance your <span>skills</span> by solving <span>real-world</span> JavaScript challenges.</p>
          </div>
          <div className="course_item">
            <h3>Buil<span>d Pro </span><span>jects</span></h3>
            <p>Apply your knowledge by <span>building</span> full-fledged <span>JavaScript projects</span>.</p>
          </div>
          <div className="course_item">
            <h3>Cod<span>in</span>g <span>Te</span>st</h3>
            <p>Prepare for <span>interviews</span> with hands-on <span>coding te</span>sts and assessments.</p>
          </div>
          <div className="course_item">
            <h3>Get Cert<span>ifica</span>te</h3>
            <p>Earn a <span>recognized cert</span>ificate to showcase your Java<span>Script</span> skills.</p>
          </div>
        </div>
      </div>
      <div className="certificate_section">
        <h2>Certi<span>fica</span>tion</h2>
        <p>Earn a certificate upon completing each course to showcase your skills.</p>
        <Image src={certficate} alt="Certificate Image" className="certificate_image" />
      </div>
      <div className="my_plans">
        <h2>Our <span>Pla</span>ns</h2>
        <div className="plans_table_wrapper">
          <table className="plans_table">
            <thead>
              <tr>
                <th>Module</th>
                <th>Free</th>
                <th>Advance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic Concepts</td>
                <td><span className="check_icon">✔️</span></td>
                <td><span className="check_icon">✔️</span></td>
              </tr>
              <tr>
                <td>Advanced Concepts</td>
                <td><span className="check_icon">✔️</span></td>
                <td><span className="check_icon">✔️</span></td>
              </tr>
              <tr>
                <td>Real-Time Problems</td>
                <td><span className="check_icon col_r">Not all</span></td>
                <td><span className="check_icon">✔️</span></td>
              </tr>
              <tr>
                <td>Project Building</td>
                <td><span className="check_icon col_r">Not all</span></td>
                <td><span className="check_icon">✔️</span></td>
              </tr>
              <tr>
                <td>Coding Tests</td>
                <td><span className="check_icon">✔️</span></td>
                <td><span className="check_icon">✔️</span></td>
              </tr>
              <tr>
                <td>Certification</td>
                <td><span className="check_icon">❌</span></td>
                <td><span className="check_icon">✔️</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="testimonial_container">
        <h2>What Our Students Say</h2>
        <div className="testimonials">
          <div className="testimonial_item">
            <p className="testimonial_quote">"JSMaster helped me land my first job as a web developer. The courses were easy to follow, and the instructors were always there to help!"</p>
            <p className="testimonial_name">John Doe</p>
            <p className="testimonial_role">Junior Developer at XYZ Corp.</p>
          </div>
          <div className="testimonial_item">
            <p className="testimonial_quote">"The advanced JavaScript course was exactly what I needed to take my skills to the next level. The real-time problems and projects made learning so much more effective."</p>
            <p className="testimonial_name">Jane Smith</p>
            <p className="testimonial_role">Full-Stack Developer at ABC Ltd.</p>
          </div>
          <div className="testimonial_item">
            <p className="testimonial_quote">"I loved the certification program! It gave me the confidence to apply for jobs and showcase my skills to potential employers."</p>
            <p className="testimonial_name">Michael Lee</p>
            <p className="testimonial_role">Frontend Developer at TechHub</p>
          </div>
        </div>
      </div>



    </div>
  );
}
