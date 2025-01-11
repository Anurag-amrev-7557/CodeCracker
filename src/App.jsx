import './App.css';
import { useEffect } from 'react';
import Hero from './components/Hero';
import Nav from './components/Nav';
import KeyFeatures from './components/KeyFeatures';

function App() {
  useEffect(() => {
    // Initialize particles.js (no import needed if using CDN)
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 6
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 3,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'window',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          }
        }
      },
      retina_detect: true
    });
  }, []);

  return (
    <>
      {/* The particles background */}
      <div
        id="particles-js"
        style={{
          position: 'fixed', // Use fixed positioning to make it stay in place
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1, // Keeps the particles behind all content
          pointerEvents: 'none' // Ensures the particles don't interfere with interactions
        }}
      ></div>
  
      <Nav />
      <Hero />
      <KeyFeatures />
    </>
  );
}

export default App;