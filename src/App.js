import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Project from './components/project';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      
      <section id="about" className="about-section">
  <h2>About Me</h2>
  <p>
    Hi, I'm Jenisha Samlin G, a passionate front-end developer with a strong foundation
    in creating dynamic and responsive web applications. I specialize in React,
    JavaScript, HTML and CSS, and love turning ideas into beautiful and functional user interfaces.
  </p>
  <p>
    I have done my internship at Izeon Innovaton pvt.lmt where I honed my skilles at Artificial Intelligence.
    My journey in web development started 6months ago when I discovered 
    the endless possibilities of building websites and applications. Since then, 
    I have honed my skills through projects, coursework, and collaboration with talented teams.
  </p>
  <p>
    I am always excited to take on new challenges, learn new technologies, and create
    impactful digital experiences. When I'm not coding, I enjoy playing games, sketching
    which keep me inspired and motivated to keep growing as a developer.
  </p>
  <p>
    Let's connect and build something amazing together!
  </p>
</section>


<section id="skills" className="skills-section">
  <h2>Skills</h2>
  
  <div className="skills-grid">
    <div className="skill-category">
      <h3>Programming Languages</h3>
      <ul>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
        <li>Python</li>
      </ul>
    </div>

    <div className="skill-category">
      <h3>Frameworks & Libraries</h3>
      <ul>
        <li>React.js</li>
        <li>Node.js</li>
        
      </ul>
    </div>

    <div className="skill-category">
      <h3>Tools & Platforms</h3>
      <ul>
        <li>Git & GitHub</li>
       
      </ul>
    </div>

    <div className="skill-category">
      <h3>Other Skills</h3>
      <ul>
        <li>Responsive Web Design</li>
        <li>RESTful APIs</li>
        
      </ul>
    </div>
  </div>
</section>

<Project />
     
      

      <section id="contact">
        <div className='contact-section'>
        <h2>Contact</h2>
        <div className="contact-card">
        <h3>JENISHA SAMLIN G</h3>
        <p>Email: <a href="mailto:samlinjenii@gmail.com">samlinjenii@gmail.com</a></p>
        <p>Phone: <a href="tel:+919489534799">9489534799</a></p>
</div></div>
      </section>

    
      <Footer />
    </div>
  );
}

export default App;