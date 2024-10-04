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
        <h1>I'm Dylan Teehan!</h1>
        <h2>First year student in the BSc/MSc Immersive Software Engineering (ISE)  </h2>
        <p>
        My journey in software engineering is driven by a curiosity for innovative technologies and a desire to create impactful solutions.
        My technical toolkit includes Java, Python, Object-Oriented Design, Django, and Machine Learning Models.
        I'm also well-versed in version control using Git, and I have experience with data structures, databases, and Agile methodologies.
        </p>
        <p>
        My coursework has given me hands-on experience in app and web development, as well as machine learning applications.
        Beyond the classroom, I've demonstrated my problem-solving skills by participating in "The European Astro Pi Challenge" and the BT Young Scientist competition. 
        These experiences have honed my ability to apply theoretical knowledge to real-world problems.
        As a team player with a track record of success in group projects, I bring strong leadership and collaboration skills to every project I undertake. 
        </p>
      </div>
    </section>
  );
}

export default AboutMe;