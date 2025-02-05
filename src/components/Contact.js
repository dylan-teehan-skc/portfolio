import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';
import '../styles/index.css';

const Contact = () => {
  return (
    <section className='contact-section'>
    <div className='contact'>
        <div className='text-box'>
        <h1>CONTACT ME</h1>
          <a href="https://www.linkedin.com/in/dylanteehan/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={32} />
          </a>
          <a href="mailto:dylan.teehan@gmail.com">
            <Mail size={32} />
          </a>
          <a href="https://github.com/dylan-teehan-skc" target="_blank" rel="noopener noreferrer">
            <Github size={32} />
          </a>
        </div>
        </div>
    </section>
  );
};

export default Contact;