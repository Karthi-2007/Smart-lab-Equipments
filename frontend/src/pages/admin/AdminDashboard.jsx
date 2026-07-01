import { Link } from "react-router-dom";
import "../Dashboard.css";
import { useData } from "../../context/DataContext";
import React from "react";

const modules = [
  { to: "/admin/users", title: "User Management", text: "Manage students, faculty, and admin access." },
  { to: "/admin/equipment", title: "Equipment Inventory", text: "Track equipment status, lab location, and utilization." },
  { to: "/admin/bookings", title: "Booking Management", text: "Monitor requests, approvals, and completed sessions." },
  { to: "/admin/maintenance", title: "Maintenance", text: "Schedule service tasks and downtime windows." },
  { to: "/admin/ai", title: "AI Predictions", text: "Review failure risk and maintenance recommendations." },
];

function AdminDashboard() {
  const { stats } = useData();

  const summary = [
    { label: "Total Equipment", value: stats.totalEquipment, note: "Across all labs" },
    { label: "Active Users", value: stats.activeUsers, note: "Students and faculty" },
    { label: "Pending Bookings", value: stats.pendingBookings, note: "Needs approval" },
    { label: "Maintenance Due", value: stats.maintenanceEquipment, note: "This week" },
  ];

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
