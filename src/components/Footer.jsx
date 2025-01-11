import './Footer.css';

function Footer() {
  return (
    <>
        <div className="footer">
            <div className="upper-part">
                <div className="part">
                    <h2>Take Your Competitive Programming to the Next Level</h2>
                    <p>Join thousands of coders already tracking their growth and improving their skills.</p>
                    <a href="">Get Started</a>
                </div>
                <div className="part">
                    <h1>About</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="part">
                    <h1>Features</h1>
                    <ul>
                        <li>Progress Tracking</li>
                        <li>Analytics Dashboard</li>
                        <li>Goal Setting</li>
                    </ul>
                </div>
                <div className="part">
                    <h1>Follow Us</h1>
                    <ul>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Linkedin</a></li>
                        <li><a href="">GitHub</a></li>
                    </ul>
                </div>
            </div>
            <div className="lower-part">
                <p>© 2025 Competitive Tracker. All Rights Reserved.</p>
            </div>
        </div>
    </>
  );
}

export default Footer;