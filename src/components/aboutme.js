import React from 'react';
import './aboutme.css'; // Importing the AboutMe specific styles
import profilePic from '../assets/images/profilepic.jpg'; // Adjust the path according to your folder structure

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profilePic} alt="Jenisha Samlin" className="profile-pic" />
        <div className="about-text">
          <p>
            Hi, I'm Jenisha Samlin G, a passionate front-end developer with a strong foundation in creating dynamic and responsive web applications. I specialize in React, JavaScript, HTML, and CSS, and love turning ideas into beautiful and functional user interfaces.
          </p>
          <p>
            I have done my internship at Izeon Innovation Pvt. Ltd., where I honed my skills in Artificial Intelligence. My journey in web development started 6 months ago when I discovered the endless possibilities of building websites and applications. Since then, I have honed my skills through projects, coursework, and collaboration with talented teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
