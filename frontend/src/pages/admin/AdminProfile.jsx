import React from "react";
import { useAuth } from "../../context/AuthContext";
import "./AdminProfile.css";

function AdminProfile() {
  const { user } = useAuth();

  return (
    <div className="admin-profile-page">
      <div className="profile-header">
        <div className="profile-avatar">
          {user?.name
            ?.split(" ")
            .map((n) => n[0])
            .join("")
            .substring(0, 2)
            .toUpperCase()}
        </div>

        <div>
          <h1>{user?.name}</h1>
          <p>{user?.role}</p>
        </div>
      </div>

      <div className="profile-grid">
        <div className="profile-card">
          <h3>👤 Personal Information</h3>

          <div className="info-row">
            <span>Name</span>
            <strong>{user?.name}</strong>
          </div>

          <div className="info-row">
            <span>Email</span>
            <strong>{user?.email}</strong>
          </div>

          <div className="info-row">
            <span>Employee ID</span>
            <strong>{user?.regNo}</strong>
          </div>

          <div className="info-row">
            <span>Department</span>
            <strong>{user?.dept}</strong>
          </div>

          <div className="info-row">
            <span>Role</span>
            <strong>{user?.role}</strong>
          </div>
        </div>

        <div className="profile-card">
          <h3>📊 Administration Summary</h3>

          <div className="summary-box">
            <div className="summary-item">
              <h2>320</h2>
              <p>Total Users</p>
            </div>

            <div className="summary-item">
              <h2>150</h2>
              <p>Equipment</p>
            </div>

            <div className="summary-item">
              <h2>42</h2>
              <p>Active Bookings</p>
            </div>

            <div className="summary-item">
              <h2>7</h2>
              <p>Maintenance Due</p>
            </div>
          </div>
        </div>

        <div className="profile-card">
          <h3>⚙️ Account Settings</h3>

          <button className="profile-btn">
            Edit Profile
          </button>

          <button className="profile-btn">
            Change Password
          </button>

          <button className="profile-btn">
            Notification Settings
          </button>

          <button className="profile-btn danger">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;