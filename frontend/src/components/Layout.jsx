import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "./Navbar";
import "./Layout.css";

function Layout() {
  const { user } = useAuth();

  // Don't render layout for public pages
  if (!user) return <Outlet />;

  return (
    <div className="app-layout">
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p>
            © {new Date().getFullYear()} LabSync AI. All Rights Reserved.
          </p>

          <nav className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Layout;