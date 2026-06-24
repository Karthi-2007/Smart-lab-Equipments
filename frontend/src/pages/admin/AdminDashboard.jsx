import { Link } from "react-router-dom";
import "../Dashboard.css";

function AdminDashboard() {
  return (
    <div className="dashboard">

      <h1>Admin Dashboard</h1>

      <div className="card-grid">

        <div className="dashboard-card">
          <h3>Total Equipment</h3>
          <p>150</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Users</h3>
          <p>320</p>
        </div>

        <div className="dashboard-card">
          <h3>Maintenance Due</h3>
          <p>7</p>
        </div>

      </div>

      <div className="menu-grid">
        <Link to="/admin/users">Users</Link>
        <Link to="/admin/equipment">Equipment</Link>
        <Link to="/admin/bookings">Bookings</Link>
        <Link to="/admin/maintenance">Maintenance</Link>
        <Link to="/admin/ai">AI Predictions</Link>
      </div>

    </div>
  );
}

export default AdminDashboard;