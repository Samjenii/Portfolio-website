import React from 'react';
import './skills.css'; // Import the Skills specific styles

const Skills = () => {
  return (
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
  );
};

export default Skills;
