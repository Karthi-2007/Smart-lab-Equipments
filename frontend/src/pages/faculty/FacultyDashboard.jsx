import { Link } from "react-router-dom";
import "../Dashboard.css";

const summary = [
  { label: "Pending Approvals", value: "8", note: "Awaiting faculty action" },
  { label: "Fault Reports", value: "6", note: "2 high priority" },
  { label: "Department Usage", value: "78%", note: "This month" },
  { label: "Active Labs", value: "5", note: "Sessions running today" },
];

const modules = [
  { to: "/faculty/approvals", title: "Booking Approvals", text: "Approve or reject student booking requests." },
  { to: "/faculty/faults", title: "Fault Monitoring", text: "Track reported issues and maintenance status." },
  { to: "/faculty/analytics", title: "Analytics", text: "Review usage hours and department lab trends." },
];

function FacultyDashboard() {
  return (
    <main className="dashboard">
      <header className="review-header">
        <div>
          <p className="review-eyebrow">Faculty Portal</p>
          <h1>Department Lab Overview</h1>
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

export default FacultyDashboard;
