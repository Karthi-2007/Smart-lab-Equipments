import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero">
  <div className="hero-content">
    <span className="tagline">
      🚀 AI-Powered Smart Laboratory Management
    </span>

    <h1>
      Smart Lab Equipment Booking &
      <span> Predictive Maintenance Platform</span>
    </h1>

    <p>
      Transform laboratory operations with intelligent equipment
      booking, real-time usage tracking, fault reporting, and
      AI-driven predictive maintenance. Improve resource utilization,
      reduce downtime, and create a smarter learning environment.
    </p>

    <div className="buttons">
      <button onClick={() => navigate("/login")}>
        Login
      </button>

      <button onClick={() => navigate("/register")}>
        Create Account
      </button>
    </div>

    <div className="stats">
      <div>
        <h3>500+</h3>
        <p>Equipment Managed</p>
      </div>

      <div>
        <h3>1000+</h3>
        <p>Bookings Processed</p>
      </div>

      <div>
        <h3>95%</h3>
        <p>Maintenance Accuracy</p>
      </div>
    </div>
  </div>
</div>

      <section className="why-us">
  <h2>Why Choose Smart Lab?</h2>

  <div className="why-grid">
    <div className="why-card">
      <h3>⚡ Smart Scheduling</h3>
      <p>
        Prevent booking conflicts and ensure fair access to
        laboratory resources.
      </p>
    </div>

    <div className="why-card">
      <h3>📊 Real-Time Analytics</h3>
      <p>
        Gain insights into equipment usage, booking trends,
        and maintenance performance.
      </p>
    </div>

    <div className="why-card">
      <h3>🤖 AI Recommendations</h3>
      <p>
        Predict maintenance requirements before equipment
        failures occur.
      </p>
    </div>

    <div className="why-card">
      <h3>🔒 Secure Access</h3>
      <p>
        Role-based dashboards for Students, Faculty,
        and Administrators.
      </p>
    </div>
  </div>
</section>
      <section className="benefits">
  <h2>Benefits for Institutions</h2>

  <div className="benefit-container">
    <div className="benefit">
      <h3>📈 Better Equipment Utilization</h3>
      <p>
        Maximize the usage of expensive laboratory resources.
      </p>
    </div>

    <div className="benefit">
      <h3>🛠 Reduced Downtime</h3>
      <p>
        Predictive maintenance minimizes unexpected breakdowns.
      </p>
    </div>

    <div className="benefit">
      <h3>🎯 Enhanced Accountability</h3>
      <p>
        Track user activities, bookings, and equipment handling.
      </p>
    </div>
  </div>
</section>
<section className="cta">
  <h2>Ready to Build Smarter Laboratories?</h2>

  <p>
    Experience the future of laboratory resource management
    with intelligent booking and predictive maintenance.
  </p>

  <button onClick={() => navigate("/register")}>
    Join Now
  </button>
</section>
<footer className="footer">
  <div className="footer-content">

    <div className="footer-section">
      <h2>LabSync AI</h2>
      <p>
        Revolutionizing laboratory management through
        intelligent booking systems and predictive maintenance.
      </p>
    </div>

    <div className="footer-section">
      <h3>Core Features</h3>
      <ul>
        <li>Equipment Booking</li>
        <li>Usage Tracking</li>
        <li>Fault Reporting</li>
        <li>Predictive Maintenance</li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Project Team</h3>
      <ul>
        <li>Karthikeyan S</li>
        <li>Hariharan A</li>
        <li>Premnath P</li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Project Type</h3>
      <p>
        Full Stack Web Application
        with Predictive Analytics
      </p>
    </div>

  </div>

  <div className="footer-bottom">
    <p>
      © 2026 LabSync AI | Smart Lab Equipment Booking &
      Predictive Maintenance Platform
    </p>
  </div>
</footer>

    </div>
  );
}

export default Home;