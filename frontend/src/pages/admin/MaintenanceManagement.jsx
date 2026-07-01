import { Link } from "react-router-dom";
import "../Dashboard.css";
import { useData } from "../../context/DataContext";
import React from "react";

function MaintenanceManagement() {
  const { equipment } = useData();
  const maintenance = equipment
    .filter(e => e.status === 'maintenance')
    .map(e => ({ task: `Service for ${e.name}`, owner: `${e.category} Team`, due: e.maintenanceDate, priority: "High" }));

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
