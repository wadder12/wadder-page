import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Wadder Projects</h2>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <ul className="contact-list">
            <li>
              <a href="https://discord.com/" target="_blank" rel="noreferrer">
                Discord
              </a>
            </li>
            <li>
              <a href="mailto:example@gmail.com" target="_blank" rel="noreferrer">
                Gmail
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;