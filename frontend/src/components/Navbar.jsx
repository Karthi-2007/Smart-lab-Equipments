import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";
import { navigation } from "../data/navigation";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const notificationCount = user?.notifications?.length || 0;

  const profileRef = useRef(null);

  const initials=user?.name
  ?.split(" ")
  .map(n=>n[0])
  .join("")
  .toUpperCase();

useEffect(()=>{

function handleClick(e){

if(profileRef.current &&
!profileRef.current.contains(e.target)){

setIsProfileOpen(false);

}

}

document.addEventListener("mousedown",handleClick);

return ()=>document.removeEventListener("mousedown",handleClick);

},[]);

  const handleLogout = () => {
  if (!window.confirm("Logout from LabSync AI?")) return;

  setIsProfileOpen(false);
  setIsMenuOpen(false);

  logout();
  navigate("/login", { replace: true });
};

  const isActive = (path) => location.pathname.startsWith(path);

   const menuItems = navigation[user?.role] || [];
   

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
  {menuItems.map((item) => (
    <li key={item.path}>
      <Link
        to={item.path}
        className={`nav-link ${isActive(item.path) ? "active" : ""}`}
      >
        {item.label}
      </Link>
    </li>
  ))}

  {/* Logout Menu */}
  <li>
    <button
      className="nav-link logout-nav-btn"
      onClick={handleLogout}
    >
      🚪 Logout
    </button>
  </li>
</ul>

        {/* Right Section */}
        <div className="navbar-right">
          {/* Notifications */}
          <div className="notification-bell">
            <span className="bell-icon">🔔</span>
            {notificationCount > 0 && (
            <span className="notification-badge">
            {notificationCount}
            
            </span>
    )}
          </div>

          {/* Profile Dropdown */}
          <div className="profile-dropdown" ref={profileRef}>
            <button aria-label="Open Profile Menu"   
            aria-expanded={isProfileOpen}
              className="profile-btn"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="avatar">

              {initials}

              </div>
              <span className="profile-name">{user?.name}</span>
            </button>

            {isProfileOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-header">
                  <p className="user-email">{user?.email}</p>
                  <p className="user-role">{user?.role}</p>
                </div>
                <div className="dropdown-divider"></div>
                <Link to={`/${user.role.toLowerCase()}/profile`} className="dropdown-item">
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
  {menuItems.map((item) => (
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
