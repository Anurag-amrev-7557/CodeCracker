import './KeyFeatures.css';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';
import { useEffect } from 'react';

function KeyFeatures() {
    useEffect(() => {
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
    <section className="keyfeatures" id='particles-js'>
        <div className="feature">
            <div className="feature-content">
                <h2>Progress Tracking</h2>
                <p>Easily track your coding journey with our intuitive dashboard. Monitor problems solved, languages used, and improvement over time.</p>
            </div>
            <div className="feature-image">
                <img src={feature1} alt="Feature" />
            </div>
        </div>
        <div className="feature other">
        <div className="feature-image">
                <img src={feature2} alt="Feature" />
            </div>
            <div className="feature-content">
                <h2>Analytics Dashboard</h2>
                <p>Get detailed analytics on your performance with insights into problem-solving speed, topic strengths, and areas for improvement.</p>
            </div>
        </div>
        <div className="feature">
            <div className="feature-content">
                <h2>Goal Setting</h2>
                <p>Set daily, weekly, or monthly coding goals and stay motivated. Our reminders and achievement badges will keep you on track!</p>
            </div>
            <div className="feature-image">
                <img src={feature3} alt="Feature" />
            </div>
        </div>
        <div className="feature other">
        <div className="feature-image">
                <img src={feature4} alt="Feature" />
            </div>
            <div className="feature-content">
                <h2>Community Comparisons</h2>
                <p>See how you rank among your peers on popular platforms like Codeforces, LeetCode, and HackerRank. Compete and improve together!</p>
            </div>
        </div>
    </section>
  );
}

export default KeyFeatures;