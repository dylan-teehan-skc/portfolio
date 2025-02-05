import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'; 
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
// import Chatbot from './components/Chatbot'; // Commented out chatbot
import Navigation from './components/Navigation';
import ProjectPage from './components/ProjectPage'; 
import Contact from './components/Contact'; 

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/chatbot" element={<Chatbot />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
