import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from './Projects'; 
import '../styles/index.css';

function ProjectPage() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) return <div>Project not found</div>;

  return (
  <section className="projects-section">
    <div className="text-box">
    <div className="section-title">
      <h1>{project.title}</h1>
      <img src={project.image} width="100%" height="100%" alt={project.title}  />
      </div>
    <div className="body">
      <p>{project.longDescription}</p>
    </div>
    </div>
    </section>
  );
}

export default ProjectPage;