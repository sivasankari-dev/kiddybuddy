import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Reach Us Section */}
        <div className="footer-section">
          <h3>Reach Us</h3>
          <p><FaEnvelope /> contact@kidzone.com</p>
          <p><FaPhoneAlt /> +123 456 7890</p>
          <p>1234 Toy Street, Playtown, PT 56789</p>
        </div>

        {/* Store Policies Section */}
        <div className="footer-section">
          <h3>Store Policies</h3>
          <ul>
            <li><a href="/refund-policy">Refund Policy</a></li>
            <li><a href="/shipping-returns-policy">Shipping & Returns Policy</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="social-icon" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
