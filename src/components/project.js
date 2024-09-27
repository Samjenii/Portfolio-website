import React from 'react';
import './project.css'; // Make sure to style the section appropriately

const Projects = () => {
  const projectList = [
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio website built using React.js, showcasing my projects, skills, and contact information.',
      technologies: ['React', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/yourprofile/portfolio-website',
      liveDemo: 'https://yourportfolio.com',
    },
    {
      title: 'E-commerce Store',
      description:
        'An e-commerce website with full functionality including product listing, shopping cart, and payment gateway integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubLink: 'https://github.com/yourprofile/ecommerce-store',
      liveDemo: 'https://ecommercestore.com',
    },
    {
      title: 'Weather App',
      description:
        'A weather forecasting app using the OpenWeather API, built with JavaScript to display current weather and 7-day forecast for any city.',
      technologies: ['JavaScript', 'API', 'HTML', 'CSS'],
      githubLink: 'https://github.com/yourprofile/weather-app',
      liveDemo: 'https://yourweatherapp.com',
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
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
