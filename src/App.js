import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'; 
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Chatbot from './components/Chatbot';
import Navigation from './components/Navigation';
import ProjectPage from './components/ProjectPage'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/Navigation" element={<Navigation />} />
          <Route path="/" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
