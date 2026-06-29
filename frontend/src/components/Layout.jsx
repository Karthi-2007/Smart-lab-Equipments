import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./Layout.css";
import { useAuth } from "../context/AuthContext";

function Layout() {
  const { user } = useAuth();

  if (!user) {
    return <Outlet />;
  }

  return (
    <div className="app-layout">
      <Navbar />
      <div className="layout-container">
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      <footer className="app-footer">
        <div className="footer-content">
          <p>&copy; 2026 LabSync AI. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
