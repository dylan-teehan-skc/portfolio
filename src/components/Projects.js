import React from 'react';
import { Link } from 'react-router-dom';
import betterAlerts from '../images/better_alerts.png';
import cveExtractor from '../images/cve_extractor.png';
import saoirse from '../images/saoirse.png';
import '../styles/index.css';

export const projectsData = [
  {
    id: 1,
    title: "BETTER ALERTS",
    shortDescription: "An LLM enabled webscraping tool !",
    longDescription: <p><br></br>Better Alerts is a LLM enabled web scraping tool designed to extract data from publications with a particular focus on assessing RSS feeds (from google alerts). Better Alerts was built to analyse news articles and determine whether they relate to the end users given topic. Better Alerts stemmed from problems when working with Google Alerts, looking for data on the company Apple? - google alerts will return results on the fruit apple also. Better Alerts was built to evade this struggle. The current prompt used to extract data is specific to Irish tech start-ups and with some small modifications could be expanded to other contexts too! <br></br><br></br>
    Better Alerts uses a dual model approach, firstly it web scrapes the data (grabbed from the google alerts RSS feed) using a mix of beautiful soup and playwright. If data is received successfully it is then pushed into AI model 1 (Gemini Flash) - this HTML content is then analysed to check content legibility and converts this HTML to markdown. Once this data has been passed through AI model 1, it's passed through AI model 2 (Gemini Pro) where the model checks if the content is related to the end users given topic. If all checks are successful the related articles are pushed to Airtable with specific tags ready for human verification. Better Alerts is also configured to automatically create google alerts with their specified keyword(s).</p>,
    image: betterAlerts
  },
  {
    id: 2,
    title: "CVE EXTRACTOR",
    shortDescription: 'An AI tool that extracts CVE data from security articles using multiple LLMs.',
    longDescription:  <p><br></br>CVE-extractor is a comprehensive software project designed to enhance cybersecurity relevance assessment. It leverages AI models, web scraping, and structured prompts to extract CVE numbers from articles, enabling efficient tagging of vulnerabilities. Through components like content extraction, RSS feed processing, Reddit post scraping, and a user-friendly GUI, cytidel-parser streamlines the identification and contextual understanding of potential threats in online content. Its purpose lies in bolstering vulnerability intelligence by automating data extraction and analysis, ultimately providing valuable insights for cybersecurity professionals.<br></br><br></br>
    CVE-extractor is built to extract key metadata from articles which mention specific security vulnerabilities, it works by firstly running a basic get request - if the webpage was no accessible through this request it switches to using playwright. Once it successfully gets the HTML it then moves to the content extraction phase. If the content was not extracted successfully it switches to using Newspaper4K or Python-Readability. Once the model is sure it has received content, this content is then pushed through AI Model 1 - checking if there is enough legible content for further extraction. If there is enough legible content it is pushed into AI Model 2 which extracts the required metadata (ie. vulnerability_type, active_exploitation, exploit_availability) and returns this content in json format - this metadata is then pushed to a separate database and stored.<br></br><br></br>
    A simple frontend was built to showcase live extraction using PyQT. It allows for both RSS feed parsing and single article parsing. CVE-extractor allows for LLM agnostic parsing suitable with a wide range of models such as ChatGPT, Gemini and Claude APIs - all it requires is an API key.</p>,
    image: cveExtractor
  },
  {
    id: 3,
    title: "SAOIRSE - MULTI-AGENT SYSTEM MANAGER",
    shortDescription: "An agent pipeline and multi agent system editor with a GUI that allows users to execute AI agent workflows intuitively",
    longDescription: <p><br></br>
      Saoirse is an agent pipeline and multi agent system editor with a graphical user interface. It allows users to create, visualize, and execute workflows composed of AI agents. The system uses a dynamic LLM (Language Model) wrapper, supporting various AI models, and includes a tool handling system for extended functionality.
      <br></br><br></br>
      It has many features including:
      <br></br>
      • Graphical node editor for creating agent workflows<br></br>
      • Dynamic LLM wrapper supporting multiple AI models<br></br>
      • Tool handling system for extended agent capabilities<br></br>
      • State machine execution with context passing between agents<br></br>
      • Drag-and-drop interface for adding agents to the workflow<br></br>
      • Save and load functionality for state machines
    </p>,
    image: saoirse
  }
];

function Projects() {
  return (
    <section className="projects-section">
      <div className="section-title">
        <h1>PROJECTS</h1>
      </div>
      <div className="projects-container">
        {projectsData.map(project => (
          <Link to={`/projects/${project.id}`} key={project.id} className="project-link">
            <div className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-info">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.shortDescription}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;