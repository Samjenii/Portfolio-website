import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          <a href="https://www.linkedin.com/in/jenisha-samlin-a33005259/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" /> LinkedIn
          </a>
        </p>
      </div>

      <div className="footer-content">
        <p>
          <a href="https://github.com/Samjenii" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="footer-icon" /> GitHub
          </a>
        </p>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Samlin's Portfolio.</p>
      </div>
    </footer>
  );
};

export default Footer;
