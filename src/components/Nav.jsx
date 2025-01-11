import React, { useState } from 'react';
import './Nav.css';

function Nav() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <section className="nav">
      <div className="nav-logo">
        <h2>CodeCracker</h2>
      </div>
      <div className={`nav-content ${isMobile ? 'mobile' : ''}`}>
        <a href="">Community</a>
        <a href="">Jobs</a>
        <a href="">Vision</a>
        <a href="">FAQ</a>
        <a href="">Blog</a>
        <a href="" className='new-space'>new.space</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className={`bar ${isMobile ? 'bar1' : ''}`}></span>
        <span className={`bar ${isMobile ? 'bar2' : ''}`}></span>
        <span className={`bar ${isMobile ? 'bar3' : ''}`}></span>
      </div>
    </section>
  );
}

export default Nav;