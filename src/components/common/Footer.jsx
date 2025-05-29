// src/components/common/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <span className="logo-text">KONCERTI</span>
              <span className="logo-icon">🎵</span>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link">📱</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📺</a>
              <a href="#" className="social-link">📘</a>
            </div>
            
            <p className="copyright">© 2025 Koncerti</p>
          </div>
          
          <div className="footer-links">
            <div className="link-column">
              <a href="#">Health & Safety</a>
              <a href="#">Contact Us</a>
              <a href="#">Partners</a>
              <a href="#">Accessibility</a>
              <a href="#">Website Accessibility</a>
            </div>
            
            <div className="link-column">
              <a href="#">Your Privacy Choices</a>
              <a href="#">Terms of Use</a>
              <a href="#">Festival Ticket Terms</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Manage Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;