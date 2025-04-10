import React from 'react';
import './Footer.css';
import { FaInstagram, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="fiscal-note">
        Hack With Me is fiscally sponsored by The Hack Foundation, a 501(c)(3) nonprofit with the EIN 81-2908499.
      </p>
      
      <div className="social-icons">
        <a href="https://www.instagram.com/hackwithme_official" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram-icon" />
        </a>
        <a href="https://github.com/Hack-With-Me-Official" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github-icon" />
        </a>
        <a href="https://www.linkedin.com/company/hack-with-me/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin-icon" />
        </a>
        <a href="https://discord.gg/rpsY54CDjF" aria-label="Email" target="_blank" rel="noopener noreferrer">
          <FaDiscord className="icon email-icon" />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
