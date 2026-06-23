import "./Dashboard.css";

function Dashboard() {

  // Later fetch from JWT or backend
  const role = "STUDENT";
  // STUDENT | FACULTY | ADMIN

  return (
    <div className="dashboard-container">

      <aside className="sidebar">
        <h2>LabSync AI</h2>

        <ul>
          <li>🏠 Dashboard</li>
          <li>🔬 Equipment</li>
          <li>📅 Bookings</li>
          <li>⚠ Faults</li>
          <li>👤 Profile</li>
          <li>🚪 Logout</li>
        </ul>
      </aside>

      <main className="dashboard-content">

        <div className="topbar">
          <h1>{role} Dashboard</h1>
        </div>

        {/* STUDENT */}
        {role === "STUDENT" && (
          <>
            <div className="card-grid">

              <div className="dashboard-card">
                <h3>Total Bookings</h3>
                <p>12</p>
              </div>

              <div className="dashboard-card">
                <h3>Active Bookings</h3>
                <p>3</p>
              </div>

              <div className="dashboard-card">
                <h3>Usage Hours</h3>
                <p>54</p>
              </div>

              <div className="dashboard-card">
                <h3>Appraisal Score</h3>
                <p>89/100</p>
              </div>

            </div>
          </>
        )}

        {/* FACULTY */}
        {role === "FACULTY" && (
          <>
            <div className="card-grid">

              <div className="dashboard-card">
                <h3>Pending Approvals</h3>
                <p>8</p>
              </div>

              <div className="dashboard-card">
                <h3>Approved Bookings</h3>
                <p>25</p>
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
          </>
        )}

        {/* ADMIN */}
        {role === "ADMIN" && (
          <>
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
                <h3>Active Bookings</h3>
                <p>42</p>
              </div>

              <div className="dashboard-card">
                <h3>Maintenance Due</h3>
                <p>7</p>
              </div>

            </div>
          </>
        )}

      </main>

    </div>
  );
}

export default Dashboard;