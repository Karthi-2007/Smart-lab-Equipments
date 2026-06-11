import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Smart Lab Equipment Bookingsss &
          Predictive Maintenance Platform
        </h1>

        <p>
          Book equipment, track usage, report faults,
          and receive AI-powered maintenance predictions.
        </p>

        <div className="buttons">
          <button onClick={() => navigate("/login")}>
            Login
          </button>

          <button onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </div>

      <section className="features">
        <h2>Key Features</h2>

        <div className="feature-grid">
          <div className="card">
            <h3>Equipment Booking</h3>
            <p>Reserve laboratory equipment online.</p>
          </div>

          <div className="card">
            <h3>Usage Tracking</h3>
            <p>Monitor equipment utilization.</p>
          </div>

          <div className="card">
            <h3>Fault Reporting</h3>
            <p>Report and manage equipment faults.</p>
          </div>

          <div className="card">
            <h3>Predictive Maintenance</h3>
            <p>AI-powered maintenance prediction.</p>
          </div>
        </div>
      </section>
      <footer className="footer">
  <p>
    © 2026 Smart Lab Equipment Booking & Predictive Maintenance Platform
  </p>
</footer>
    </div>
  );
}

export default Home;