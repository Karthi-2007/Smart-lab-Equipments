import { Link} from "react-router-dom";
import "../Dashboard.css";

const equipmentImages = {
  oscilloscope: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
  printer3d: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  laptop: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
};

const recentBookings = [
  { id: 1, equipment: "Oscilloscope DSO-3104", lab: "Electronics Lab", date: "Jun 22, 2026", status: "Completed", statusClass: "status-done" },
  { id: 2, equipment: "3D Printer Ender 5", lab: "Prototyping Lab", date: "Jun 21, 2026", status: "Completed", statusClass: "status-done" },
  { id: 3, equipment: "CNC Milling Machine", lab: "Mech Lab", date: "Jun 24, 2026", status: "Active", statusClass: "status-active" },
  { id: 4, equipment: "Spectrum Analyser", lab: "RF Lab", date: "Jun 25, 2026", status: "Upcoming", statusClass: "status-upcoming" },
];

function StudentDashboard() {
  return (
    <div className="sd-root">

      {/* ── Sidebar ── */}
      <aside className="sd-sidebar">
        <div className="sd-brand">
          <span className="sd-brand-icon">⚗</span>
          <span className="sd-brand-name">LabSync<em>AI</em></span>
        </div>

        <div className="sd-user">
          <div className="sd-avatar">KS</div>
          <div>
            <div className="sd-user-name">Karthikeyan S</div>
            <div className="sd-user-role">Student · IT Dept</div>
          </div>
        </div>

        <nav className="sd-nav">
          <Link to="/student/dashboard" className="sd-nav-item sd-nav-item--active">
           <span className="sd-nav-icon">◈</span> Dashboard
          </Link>
          <Link to="/student/equipment" className="sd-nav-item">
            <span className="sd-nav-icon">⊡</span> Equipment List
          </Link>
          <Link to="/student/book" className="sd-nav-item">
            <span className="sd-nav-icon">◷</span> Book Equipment
          </Link>
          <Link to="/student/usage" className="sd-nav-item">
            <span className="sd-nav-icon">◎</span> Usage History
          </Link>
          <Link to="/student/fault" className="sd-nav-item">
            <span className="sd-nav-icon">⚠</span> Fault Reporting
          </Link>
          <Link to="/student/profile" className="sd-nav-item">
            <span className="sd-nav-icon">◯</span> Profile
          </Link>
        </nav>

        <Link to="/logout" className="sd-logout">
          <span>↩</span> Logout
        </Link>
      </aside>

      {/* ── Main ── */}
      <main className="sd-main">

        {/* Top bar */}
        <header className="sd-topbar">
          <div>
            <p className="sd-topbar-breadcrumb">Student Portal</p>
            <h1 className="sd-topbar-title">My Dashboard</h1>
          </div>
          <div className="sd-topbar-right">
            <div className="sd-notif">
              <span className="sd-notif-dot" />
              🔔
            </div>
            <Link to="/student/book" className="sd-btn-primary">
              + New Booking
            </Link>
          </div>
        </header>

        {/* KPI Cards */}
        <section className="sd-kpi-grid">
          <div className="sd-kpi sd-kpi--blue">
            <div className="sd-kpi-top">
              <span className="sd-kpi-label">Total Bookings</span>
              <span className="sd-kpi-emoji">📅</span>
            </div>
            <div className="sd-kpi-value">24</div>
            <div className="sd-kpi-sub sd-kpi-sub--up">↑ 3 this month</div>
          </div>

          <div className="sd-kpi sd-kpi--green">
            <div className="sd-kpi-top">
              <span className="sd-kpi-label">Active Bookings</span>
              <span className="sd-kpi-emoji">⚡</span>
            </div>
            <div className="sd-kpi-value">2</div>
            <div className="sd-kpi-sub sd-kpi-sub--up">In progress now</div>
          </div>

          <div className="sd-kpi sd-kpi--cyan">
            <div className="sd-kpi-top">
              <span className="sd-kpi-label">Usage Hours</span>
              <span className="sd-kpi-emoji">🕐</span>
            </div>
            <div className="sd-kpi-value">86h</div>
            <div className="sd-kpi-sub sd-kpi-sub--up">↑ 12h this week</div>
          </div>

          <div className="sd-kpi sd-kpi--amber">
            <div className="sd-kpi-top">
              <span className="sd-kpi-label">Appraisal Score</span>
              <span className="sd-kpi-emoji">🏅</span>
            </div>
            <div className="sd-kpi-value">92</div>
            <div className="sd-kpi-sub sd-kpi-sub--gold">Excellent</div>
          </div>
        </section>

        {/* Quick Access + Hero Banner */}
        <section className="sd-mid-grid">

          {/* Quick Links */}
          <div className="sd-quick-card">
            <h2 className="sd-section-title">Quick Access</h2>
            <div className="sd-quick-grid">
              <Link to="/student/equipment" className="sd-quick-item">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&q=80"
                  alt="Lab equipment"
                  className="sd-quick-img"
                />
                <span>Equipment</span>
              </Link>
              <Link to="/student/book" className="sd-quick-item">
                <img
                  src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=200&q=80"
                  alt="Calendar booking"
                  className="sd-quick-img"
                />
                <span>Book Now</span>
              </Link>
              <Link to="/student/usage" className="sd-quick-item">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80"
                  alt="Analytics"
                  className="sd-quick-img"
                />
                <span>Usage</span>
              </Link>
              <Link to="/student/fault" className="sd-quick-item">
                <img
                 src="https://picsum.photos/seed/fault/200/200"
                  alt="Report fault"
                  className="sd-quick-img"
                />
                <span>Report Fault</span>
              </Link>
            </div>
          </div>

          {/* Appraisal Score Panel */}
          <div className="sd-score-card">
            <div className="sd-score-overlay">
              <div className="sd-score-avatar">KS</div>
              <div className="sd-score-name">Karthikeyan S</div>
              <div className="sd-score-dept">Information Technology · 2nd Year</div>
              <div className="sd-score-num">92</div>
              <div className="sd-score-label">Appraisal Score</div>
              <div className="sd-score-bar">
                <div className="sd-score-fill" style={{ width: "92%" }} />
              </div>
              <Link to="/student/profile" className="sd-score-btn">View Profile →</Link>
            </div>
          </div>
        </section>

        {/* Recent Activity Table */}
        <section className="sd-table-card">
          <div className="sd-table-header">
            <h2 className="sd-section-title">Recent Activity</h2>
            <span className="sd-badge-info">Last 7 days</span>
          </div>
          <div className="sd-table-wrap">
            <table className="sd-table">
              <thead>
                <tr>
                  <th>Equipment</th>
                  <th>Lab</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((b) => (
                  <tr key={b.id}>
                    <td className="sd-td-bold">{b.equipment}</td>
                    <td>{b.lab}</td>
                    <td>{b.date}</td>
                    <td>
                      <span className={`sd-status ${b.statusClass}`}>{b.status}</span>
                    </td>
                    <td>
                      <Link to="/student/usage" className="sd-link">View →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
}

export default StudentDashboard;
