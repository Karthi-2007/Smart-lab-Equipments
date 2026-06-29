import { Link } from "react-router-dom";
import "../Dashboard.css";

const faults = [
  { id: "FT-501", equipment: "3D Printer", student: "Premnath P", severity: "High", status: "Open" },
  { id: "FT-502", equipment: "Arduino Uno Kit", student: "Karthikeyan S", severity: "Low", status: "In Progress" },
  { id: "FT-503", equipment: "Digital Oscilloscope", student: "Hariharan A", severity: "Medium", status: "Resolved" },
  { id: "FT-504", equipment: "Hydraulic Test Rig", student: "Nivetha R", severity: "Critical", status: "Open" },
];

function FaultMonitoring() {
  return (
    <main className="dashboard">
      <header className="review-header">
        <div>
          <p className="review-eyebrow">Faculty Portal</p>
          <h1>Fault Monitoring</h1>
        </div>
        <Link to="/faculty/dashboard" className="ghost-link">Back to Dashboard</Link>
      </header>

      <section className="data-card">
        <div className="data-card-header">
          <h2>Reported Faults</h2>
          <span className="status-pill is-danger">2 Open</span>
        </div>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>Fault ID</th>
                <th>Equipment</th>
                <th>Reported By</th>
                <th>Severity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {faults.map((fault) => (
                <tr key={fault.id}>
                  <td>{fault.id}</td>
                  <td className="strong-cell">{fault.equipment}</td>
                  <td>{fault.student}</td>
                  <td>
                    <span className={`status-pill ${fault.severity === "Critical" || fault.severity === "High" ? "is-danger" : fault.severity === "Medium" ? "is-warning" : "is-info"}`}>
                      {fault.severity}
                    </span>
                  </td>
                  <td>{fault.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default FaultMonitoring;
