import { Link, useLocation } from "react-router-dom";
import { useAuth } from "/src/context/AuthContext.jsx";
import {
  FaTachometerAlt,
  FaTools,
  FaCalendarCheck,
  FaHistory,
  FaExclamationTriangle,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

const NAV_ITEMS = [
  { to: "/student/dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
  { to: "/student/equipment", icon: <FaTools />,         label: "Equipment List" },
  { to: "/student/book",      icon: <FaCalendarCheck />, label: "Book Equipment" },
  { to: "/student/usage",     icon: <FaHistory />,       label: "Usage History" },
  { to: "/student/fault",     icon: <FaExclamationTriangle />, label: "Fault Report" },
  { to: "/student/profile",   icon: <FaUser />,          label: "Profile" },
];

function StudentSidebar() {
  const { pathname } = useLocation();
  const { user } = useAuth();

  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
    : "ST";

  return (
    <aside className="sd-sidebar">
      <div className="sd-brand">
        <span className="sd-brand-icon">⚗</span>
        <span className="sd-brand-name">LabSync<em>AI</em></span>
      </div>

      <div className="sd-user">
        <div className="sd-avatar">{initials}</div>
        <div>
          <div className="sd-user-name">{user?.name || "Student"}</div>
          <div className="sd-user-role">Student · {user?.dept || "Dept"}</div>
        </div>
      </div>

      <nav className="sd-nav">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`sd-nav-item ${pathname === item.to ? "sd-nav-item--active" : ""}`}
          >
            <span className="sd-nav-icon">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link to="/logout" className="sd-logout">
        <FaSignOutAlt className="sd-nav-icon" /> Logout
      </Link>
    </aside>
  );
}

export default StudentSidebar;