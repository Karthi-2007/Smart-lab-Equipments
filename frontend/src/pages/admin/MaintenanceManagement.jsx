import { Link } from "react-router-dom";
import "../Dashboard.css";

const maintenance = [
  { task: "Calibrate Digital Oscilloscope", owner: "Electronics Team", due: "Jul 01, 2026", priority: "High" },
  { task: "Replace 3D Printer Nozzle", owner: "Manufacturing Team", due: "Jul 02, 2026", priority: "Critical" },
  { task: "Inspect Hydraulic Test Rig", owner: "Mechanical Team", due: "Jul 04, 2026", priority: "Medium" },
  { task: "Firmware update for PLC Kit", owner: "Automation Team", due: "Jul 06, 2026", priority: "Low" },
];

function MaintenanceManagement() {
  return (
    <main className="dashboard">
      <header className="review-header">
        <div>
          <p className="review-eyebrow">Admin Portal</p>
          <h1>Maintenance Schedule</h1>
        </div>
        <Link to="/admin/dashboard" className="ghost-link">Back to Dashboard</Link>
      </header>

      <section className="timeline-list">
        {maintenance.map((item) => (
          <article className="timeline-item" key={item.task}>
            <div>
              <h2>{item.task}</h2>
              <p>{item.owner}</p>
            </div>
            <div className="timeline-meta">
              <span>{item.due}</span>
              <span className={`status-pill ${item.priority === "Critical" ? "is-danger" : item.priority === "High" ? "is-warning" : "is-info"}`}>
                {item.priority}
              </span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default MaintenanceManagement;
