import React from 'react';
import Project1 from '../images/meta-flux.png'; 

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and custom CSS.",
    image: Project1
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB.",
    image: "/path/to/ecommerce-image.jpg"
  },
  {
    id: 3,
    title: "Weather App",
    description: "Real-time weather application using React and OpenWeatherMap API.",
    image: "/path/to/weather-app-image.jpg"
  }
];

function Projects() {
  return (
    <section className="projects-section">
      <div className="section-title">
        <h1>Projects</h1>
      </div>
      <div className="projects-container">
        {projectsData.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;