import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Layout.css";
import { useAuth } from "../context/AuthContext";

function Layout() {
  const { user, loading } = useAuth();

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  // Public pages (Login/Register/Home)
  if (!user) {
    return <Outlet />;
  }

  return (
    <div className="app-layout">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="layout-container">
        <main className="main-content">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">

          <p>
            © {new Date().getFullYear()} LabSync AI. All rights reserved.
          </p>

          <div className="footer-links">

            <Link to="/privacy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms of Service
            </Link>

            <Link to="/contact">
              Contact Us
            </Link>

          </div>

        </div>
      </footer>
    </div>
  );
}

export default Layout;