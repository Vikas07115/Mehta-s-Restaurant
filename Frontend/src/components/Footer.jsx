import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={document.body.classList.contains("dark") ? "dark" : ""}>
      <div className="container">
        <div className="banner">
          <div className="left">
            <h2>Vikas Mehta (91+XXXXXXXX)</h2>
          </div>
          <div className="right">
            <p>Almora, Uttarakhand, India</p>
            <p>Opening Time: 04:00 PM - 12:00 AM</p>
          </div>
        </div>

        <div className="banner">
          <div className="left">
            <p>Designed and Developed by Vikas Mehta</p>
          </div>
          <div className="right">
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/vikas-mehta07/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Vikas07115" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/_v_mehta?igsh=c3I2cW9wNGhmMjhr" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
            <p>All Rights Reserved by Vikas Mehta</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
