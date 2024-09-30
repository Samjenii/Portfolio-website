import React from 'react';
import './project.css'; // Make sure to style the section appropriately

const Projects = () => {
  const projectList = [
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio website built using React.js, showcasing my projects, skills, and contact information.',
      technologies: ['React', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/Samjenii/Portfolio-website',
      
    },
    {
      title: 'Depression Chatbot',
      description:
        'A depression chatbot is an AI-powered tool designed to provide emotional support, mental health resources, and coping strategies to individuals struggling with depression or depressive symptoms.',
      technologies: ['NLTK', 'Node.js', 'OpenAI API', 'Python'],
      githubLink: 'https://github.com/Samjenii/Depression-Chatbot',
     
    },
    {
      title: 'Hospital Management System',
      description:
        'A Hospital Management System (HMS) is a comprehensive, integrated software solution designed to manage and automate various aspects of a hospital’s day-to-day operations. ',
      technologies: ['JavaScript', 'API', 'HTML', 'CSS'],
      
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="technologies-list">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
