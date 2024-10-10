import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

function Navigation() {
  const navRef = useRef(null);

  useEffect(() => {
    const navElement = navRef.current;
    if (!navElement) return;

    const handleClick = (event) => {
      const clickedLi = event.target.closest('li');
      if (clickedLi) {
        navElement.querySelectorAll('li').forEach(li => li.classList.remove('active'));
        clickedLi.classList.add('active');
      }
    };

    navElement.addEventListener('click', handleClick);

    return () => {
      navElement.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <nav ref={navRef}>
        <ul>
          <li><Link to="/" className="nav-link"><span>Home</span></Link></li>
          <li><Link to="/about" className="nav-link"><span>About Me</span></Link></li>
          <li><Link to="/projects" className="nav-link"><span>Projects</span></Link></li>
          <li><Link to="/chatbot" className="nav-link"><span>Chatbot</span></Link></li>
          <li><Link to="/contact" className="nav-link"><span>Contact</span></Link></li>
          <li className="slide"></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;