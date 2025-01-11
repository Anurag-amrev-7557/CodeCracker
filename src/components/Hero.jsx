import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Track Your Growth, Dominate the Leaderboard</h1>
        <p>Monitor your progress, set goals, and compare with the best. Take your competitive programming skills to the next level.</p>
        <button className="cta-button">Get Started</button>
      </div>

      <div className="logos-section">
        <div className="logos-container">
          <div className="logo-card" id='codeforces'>
            <img src='https://img.icons8.com/?size=160&id=jldAN67IAsrW&format=png'></img>
            <span className="logo-text">Codeforces</span>
          </div>
          <div className="logo-card" id='leetcode'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png'></img>
            <span className="logo-text">Leetcode</span>
          </div>
          <div className="logo-card" id='codechef'>
            <img src='https://user-images.githubusercontent.com/63710339/185728318-0b976716-4f78-4a0a-a377-1643cc18a57e.png'></img>
            <span className="logo-text">CodeChef</span>
          </div>
          <div className="logo-card" id='gfg'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/GeeksforGeeks.svg/2560px-GeeksforGeeks.svg.png'></img>
            <span className="logo-text">Geeks for Geeks</span>
          </div>
          <div className="logo-card" id='hackerank'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png'></img>
            <span className="logo-text">Hackerank</span>
          </div>
          <div className="logo-card" id='hackerearth'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/HackerEarth_logo.png/800px-HackerEarth_logo.png'></img>
            <span className="logo-text">Hackerearth</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;