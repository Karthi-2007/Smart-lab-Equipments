import React from "react";
import { useAuth } from "../../context/AuthContext";
import "./AdminProfile.css";
import { useData } from "../../context/DataContext";

function AdminProfile() {
  const { user } = useAuth();
  const { stats } = useData();

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
            <span>Name:&nbsp;</span>
            <strong>{user?.name}</strong>
          </div>

          <div className="info-row">
            <span>Email:&nbsp;</span>
            <strong>{user?.email}</strong>
          </div>

          <div className="info-row">
            <span>Employee ID:&nbsp;</span>
            <strong>{user?.regNo}</strong>
          </div>

          <div className="info-row">
            <span>Department:&nbsp;</span>
            <strong>{user?.dept}</strong>
          </div>

          <div className="info-row">
            <span>Role:&nbsp;</span>
            <strong>{user?.role}</strong>
          </div>
        </div>

        <div className="profile-card">
          <h3>📊 Administration Summary</h3>

          <div className="summary-box">
            <div className="summary-item">
              <h2>{stats.totalUsers}</h2>
              <p>Total Users</p>
            </div>

            <div className="summary-item">
              <h2>{stats.totalEquipment}</h2>
              <p>Equipment</p>
            </div>

            <div className="summary-item">
              <h2>{stats.pendingBookings + stats.approvedBookings}</h2>
              <p>Active Bookings</p>
            </div>

            <div className="summary-item">
              <h2>{stats.maintenanceEquipment}</h2>
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