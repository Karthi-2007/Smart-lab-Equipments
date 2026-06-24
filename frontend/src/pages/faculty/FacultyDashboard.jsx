import { Link } from "react-router-dom";
import "../Dashboard.css";

function FacultyDashboard() {
  return (
    <div className="dashboard">

      <h1>Faculty Dashboard</h1>

      <div className="card-grid">

        <div className="dashboard-card">
          <h3>Pending Approvals</h3>
          <p>8</p>
        </div>

        <div className="dashboard-card">
          <h3>Fault Reports</h3>
          <p>6</p>
        </div>

        <div className="dashboard-card">
          <h3>Department Usage</h3>
          <p>78%</p>
        </div>

      </div>

      <div className="menu-grid">
        <Link to="/faculty/approvals">Booking Approvals</Link>
        <Link to="/faculty/faults">Fault Monitoring</Link>
        <Link to="/faculty/analytics">Analytics</Link>
      </div>

    </div>
  );
}

export default FacultyDashboard;