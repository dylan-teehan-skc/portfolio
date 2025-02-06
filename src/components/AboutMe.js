import React from 'react';
import '../styles/index.css';
import headshot from '../images/headshot_AI.jpeg'; 

function AboutMe() {
  return (
    <section className="about-section">
      <div className="circular-box">
        <img src={headshot} alt="Dylan's headshot" className="headshot-image" />
      </div>
      <div className="text-box">
      <div className="section-title">	
        <h1>ABOUT ME</h1>
      </div>
        <h2>2nd Year Immersive Software Engineering Student (ISE) </h2>
        <br />
        <p>
        Hey! I'm currently in my second year of the Immersive Software Engineering program at the University of Limerick.
        </p>
        <p>
        
        I've completed two industry residencies that have shaped my journey as a software engineer. At Dogpatch Labs, 
        I dove deep into AI and automation, working with Python to build web scraping tools and multi-agent systems to 
        benefit real-world companies.
        </p>
        <p>
        My second residency at Viotas introduced me to enterprise-level software development. Here, I worked with 
        TypeScript, AWS tools, and Apache Airflow, while experiencing firsthand how Agile methodologies drive successful 
        project delivery.
        </p>
        <p>
        These experiences have given me a solid foundation in both cutting-edge AI technologies and enterprise software development. 
        </p>
      </div>
    </section>
  );
}

export default AboutMe;