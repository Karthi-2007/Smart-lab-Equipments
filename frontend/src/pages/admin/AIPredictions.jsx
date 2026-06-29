import { Link } from "react-router-dom";
import "../Dashboard.css";

const predictions = [
  {
    equipment: "3D Printer",
    risk: "88%",
    title: "Nozzle clog likely within 5 days",
    recommendation: "Schedule nozzle cleaning and filament path inspection.",
    priority: "Critical",
  },
  {
    equipment: "Digital Oscilloscope",
    risk: "71%",
    title: "Calibration drift detected",
    recommendation: "Run calibration before the next electronics lab session.",
    priority: "High",
  },
  {
    equipment: "Hydraulic Test Rig",
    risk: "54%",
    title: "Pressure variation above normal",
    recommendation: "Inspect seals and oil level during weekly maintenance.",
    priority: "Medium",
  },
];

function AIPredictions() {
  return (
    <main className="dashboard">
      <header className="review-header">
        <div>
          <p className="review-eyebrow">Admin Portal</p>
          <h1>AI Maintenance Predictions</h1>
        </div>
        <Link to="/admin/dashboard" className="ghost-link">Back to Dashboard</Link>
      </header>

      <section className="prediction-grid">
        {predictions.map((prediction) => (
          <article className="prediction-card" key={prediction.equipment}>
            <div className="prediction-top">
              <span>{prediction.equipment}</span>
              <strong>{prediction.risk}</strong>
            </div>
            <h2>{prediction.title}</h2>
            <p>{prediction.recommendation}</p>
            <span className={`status-pill ${prediction.priority === "Critical" ? "is-danger" : prediction.priority === "High" ? "is-warning" : "is-info"}`}>
              {prediction.priority} priority
            </span>
          </article>
        ))}
      </section>
    </main>
  );
}

export default AIPredictions;
