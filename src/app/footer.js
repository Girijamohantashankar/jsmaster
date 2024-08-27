import "../../styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_content">
        <div className="footer_section about">
          <h3>About JSMaster</h3>
          <p>
            JSMaster is dedicated to helping you become a JavaScript expert. 
            Our courses cover everything from beginner fundamentals to advanced topics.
          </p>
        </div>
        <div className="footer_section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer_section social">
          <h3>Follow Us</h3>
          <div className="social_icons">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>&copy; 2024 JSMaster. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
