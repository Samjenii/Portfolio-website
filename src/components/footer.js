import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <p>LinkedIn :<a href="https://www.linkedin.com/in/jenisha-samlin-a33005259/"> jenisha-samlin-a33005259</a></p>
     
      </div>

      <div className="footer-content">
      <p>GitHub :<a href="https://github.com/Samjenii"> Samjenii</a></p>
     
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Samlin's Portfolio.</p>
      </div>
    </footer>
  );
};

export default Footer;
