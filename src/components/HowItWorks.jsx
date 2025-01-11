import './HowItWorks.css';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';
import { useEffect } from 'react';

function HowItWorks() {
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
    <>
        <h2 className='KeyFeatures-heading'>How It Works</h2>
        <section className="keyfeatures" id='particles-js'>
            <div className="feature">
                <div className="feature-content">
                    <h2>Connect Your Accounts</h2>
                    <p>Sync your profiles from platforms like Codeforces, LeetCode, and CodeChef in just a few clicks.</p>
                </div>
                <div className="feature-image">
                    <img src={feature1} alt="Feature" />
                </div>
            </div>
            <div className="feature">
                <div className="feature-content">
                    <h2>Track & Analyze</h2>
                    <p>Get real-time insights and detailed analytics about your performance.</p>
                </div>
                <div className="feature-image">
                    <img src={feature2} alt="Feature" />
                </div>
            </div>
            <div className="feature">
                <div className="feature-content">
                    <h2>Set Goals & Achieve</h2>
                    <p>Define your targets and celebrate milestones with rewards and achievements.</p>
                </div>
                <div className="feature-image">
                    <img src={feature3} alt="Feature" />
                </div>
            </div>
            <div className="feature">
                <div className="feature-content">
                    <h2>Compete with Friends</h2>
                    <p>Compare your progress with friends or competitors and climb the leaderboard!</p>
                </div>
                <div className="feature-image">
                    <img src={feature4} alt="Feature" />
                </div>
            </div>
        </section>
    </>
  );
}

export default HowItWorks;