import './HowItWorks.css';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';

function HowItWorks() {
  return (
    <>
        <h2 className='KeyFeatures-heading'>How It Works</h2>
        <section className="keyfeatures" id='particles-js'>
            <div className="feature how">
                <div className="feature-content">
                    <h2>Connect Your Accounts</h2>
                    <p>Sync your profiles from platforms like Codeforces, LeetCode, and CodeChef in just a few clicks.</p>
                </div>
                <div className="feature-image">
                    <img src={feature1} alt="Feature" />
                </div>
            </div>
            <div className="feature how">
                <div className="feature-content">
                    <h2>Track & Analyze</h2>
                    <p>Get real-time insights and detailed analytics about your performance.</p>
                </div>
                <div className="feature-image">
                    <img src={feature2} alt="Feature" />
                </div>
            </div>
            <div className="feature how">
                <div className="feature-content">
                    <h2>Set Goals & Achieve</h2>
                    <p>Define your targets and celebrate milestones with rewards and achievements.</p>
                </div>
                <div className="feature-image">
                    <img src={feature3} alt="Feature" />
                </div>
            </div>
            <div className="feature how">
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