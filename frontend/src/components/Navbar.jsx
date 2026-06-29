import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) => location.pathname.startsWith(path);

  // Student Navigation Items
  const studentMenuItems = [
    { label: "📊 Dashboard", path: "/student/dashboard" },
    { label: "🔧 Equipment", path: "/student/equipment" },
    { label: "📅 Book Equipment", path: "/student/book" },
    { label: "📈 Usage History", path: "/student/usage" },
    { label: "⚠️ Report Fault", path: "/student/fault" },
  ];

  // Faculty Navigation Items
  const facultyMenuItems = [
    { label: "📊 Dashboard", path: "/faculty/dashboard" },
    { label: "✅ Approvals", path: "/faculty/approvals" },
    { label: "🔧 Equipment", path: "/faculty/equipment" },
    { label: "⚠️ Faults", path: "/faculty/faults" },
  ];

  // Admin Navigation Items
  const adminMenuItems = [
    { label: "📊 Dashboard", path: "/admin/dashboard" },
    { label: "🔧 Equipment", path: "/admin/equipment" },
    { label: "👥 Users", path: "/admin/users" },
    { label: "📈 Analytics", path: "/admin/analytics" },
    { label: "⚙️ Settings", path: "/admin/settings" },
  ];

  const getMenuItems = () => {
    switch (user?.role) {
      case "STUDENT":
        return studentMenuItems;
      case "FACULTY":
        return facultyMenuItems;
      case "ADMIN":
        return adminMenuItems;
      default:
        return [];
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to={`/${user?.role?.toLowerCase()}/dashboard`} className="navbar-logo">
          <span className="logo-icon">⚗️</span>
          <span className="logo-text">
            LabSync <span className="ai-badge">AI</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu desktop">
          {getMenuItems().map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${isActive(item.path) ? "active" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="navbar-right">
          {/* Notifications */}
          <div className="notification-bell">
            <span className="bell-icon">🔔</span>
            <span className="notification-badge">3</span>
          </div>

          {/* Profile Dropdown */}
          <div className="profile-dropdown">
            <button
              className="profile-btn"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <span className="avatar">👤</span>
              <span className="profile-name">{user?.name}</span>
              <span className={`chevron ${isProfileOpen ? "open" : ""}`}>▼</span>
            </button>

            {isProfileOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-header">
                  <p className="user-email">{user?.email}</p>
                  <p className="user-role">{user?.role}</p>
                </div>
                <div className="dropdown-divider"></div>
                <Link to="/profile" className="dropdown-item">
                  👤 My Profile
                </Link>
                <Link to="/settings" className="dropdown-item">
                  ⚙️ Settings
                </Link>
                <Link to="/help" className="dropdown-item">
                  ❓ Help & Support
                </Link>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item logout" onClick={handleLogout}>
                  🚪 Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle mobile"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="nav-menu mobile">
          {getMenuItems().map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${isActive(item.path) ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <div className="mobile-divider"></div>
          <li>
            <Link to="/profile" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              👤 My Profile
            </Link>
          </li>
          <li>
            <Link to="/settings" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              ⚙️ Settings
            </Link>
          </li>
          <li>
            <button
              className="nav-link logout-btn"
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
            >
              🚪 Logout
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
