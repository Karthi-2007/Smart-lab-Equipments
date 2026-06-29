import { Link } from "react-router-dom";
import "../Dashboard.css";

const summary = [
  { label: "Total Equipment", value: "150", note: "12 labs covered" },
  { label: "Active Users", value: "320", note: "Students and faculty" },
  { label: "Pending Bookings", value: "18", note: "Needs approval" },
  { label: "Maintenance Due", value: "7", note: "This week" },
];

const modules = [
  { to: "/admin/users", title: "User Management", text: "Manage students, faculty, and admin access." },
  { to: "/admin/equipment", title: "Equipment Inventory", text: "Track equipment status, lab location, and utilization." },
  { to: "/admin/bookings", title: "Booking Management", text: "Monitor requests, approvals, and completed sessions." },
  { to: "/admin/maintenance", title: "Maintenance", text: "Schedule service tasks and downtime windows." },
  { to: "/admin/ai", title: "AI Predictions", text: "Review failure risk and maintenance recommendations." },
];

function AdminDashboard() {
  return (
    <main className="dashboard">
      <header className="review-header">
        <div>
          <p className="review-eyebrow">Admin Portal</p>
          <h1>Smart Lab Control Center</h1>
        </div>
        <Link to="/logout" className="ghost-link">Logout</Link>
      </header>

      <section className="card-grid">
        {summary.map((item) => (
          <article className="dashboard-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <p>{item.note}</p>
          </article>
        ))}
      </section>

      <section className="menu-grid">
        {modules.map((module) => (
          <Link to={module.to} className="module-card" key={module.to}>
            <h2>{module.title}</h2>
            <p>{module.text}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default AdminDashboard;
