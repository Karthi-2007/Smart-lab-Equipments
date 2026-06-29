import { Link } from "react-router-dom";
import "../Dashboard.css";

const labUsage = [
  { lab: "Electronics Lab", hours: 126, utilization: "88%" },
  { lab: "Embedded Systems Lab", hours: 104, utilization: "74%" },
  { lab: "Manufacturing Lab", hours: 96, utilization: "69%" },
  { lab: "Mechanical Lab", hours: 83, utilization: "61%" },
];

function Analytics() {
  const totalHours = labUsage.reduce((total, item) => total + item.hours, 0);

  return (
    <main className="dashboard">
      <header className="review-header">
        <div>
          <p className="review-eyebrow">Faculty Portal</p>
          <h1>Department Analytics</h1>
        </div>
        <Link to="/faculty/dashboard" className="ghost-link">Back to Dashboard</Link>
      </header>

      <section className="card-grid">
        <article className="dashboard-card">
          <span>Total Usage Hours</span>
          <strong>{totalHours}h</strong>
          <p>Across active department labs</p>
        </article>
        <article className="dashboard-card">
          <span>Most Used Lab</span>
          <strong>Electronics</strong>
          <p>88% utilization</p>
        </article>
        <article className="dashboard-card">
          <span>Completion Rate</span>
          <strong>94%</strong>
          <p>Approved sessions completed</p>
        </article>
      </section>

      <section className="data-card">
        <div className="data-card-header">
          <h2>Lab Utilization</h2>
          <span className="status-pill is-info">Monthly</span>
        </div>
        <div className="metric-list">
          {labUsage.map((item) => (
            <div className="metric-row" key={item.lab}>
              <div>
                <strong>{item.lab}</strong>
                <span>{item.hours} hours</span>
              </div>
              <div className="meter">
                <span style={{ width: item.utilization }} />
              </div>
              <b>{item.utilization}</b>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Analytics;
