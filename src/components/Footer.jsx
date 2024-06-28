import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Ecell from '../assets/ecell-logo.png';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div id="footer-logo">
          <img src={Ecell} alt="Ecell Logo" id="footer-ecell-image" />
        </div>
        <div className="footer-section">
          <h3 clasName='footer-header'>Contact Information</h3>
          <p>Phone: +91 94248 85504     </p>
          <p>Phone: +91 93290 00474     </p>
          <p>Email: ecell@ietdavv.edu.in</p>
        </div>
        <div className="footer-section">
          <h3 clasName='footer-header'>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/ecell_ietdavv/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/e-cell-iet-davv" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3 clasName='footer-header'>Owner Information</h3>
          <p>Owner: E-Cell IET DAVV</p>
          <p>Location: Indore(M.P.), India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 E-Cell IET DAVV. All rights reserved.</p>
      </div>
    </footer>
  );
}
