import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "./Navbar";
import "./Layout.css";

function Layout() {
  const { user } = useAuth();

  // Public Pages
  if (!user) {
    return <Outlet />;
  }

  return (
    <div className="app-layout">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <p>
            © {new Date().getFullYear()} LabSync AI. All Rights Reserved.
          </p>

          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;