import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'; 
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Chatbot from './components/Chatbot';
import Navigation from './components/Navigation';

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
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
