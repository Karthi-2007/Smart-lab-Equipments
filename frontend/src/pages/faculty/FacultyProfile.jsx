import React from "react";
import { useAuth } from "../../context/AuthContext";
import "./Faculty.css";

function FacultyProfile() {
  const { user } = useAuth();

  return (
    <div className="faculty-page">

      <div className="page-header">
        <h1>👨‍🏫 Faculty Profile</h1>
      </div>

      <div className="profile-card">

        <div className="profile-avatar">
          {user?.name
            ?.split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
        </div>

        <div className="profile-details">

          <div className="profile-row">
            <strong>Name</strong>
            <span>{user?.name}</span>
          </div>

          <div className="profile-row">
            <strong>Email</strong>
            <span>{user?.email}</span>
          </div>

          <div className="profile-row">
            <strong>Faculty ID</strong>
            <span>{user?.regNo}</span>
          </div>

          <div className="profile-row">
            <strong>Department</strong>
            <span>{user?.dept}</span>
          </div>

          <div className="profile-row">
            <strong>Role</strong>
            <span>{user?.role}</span>
          </div>

        </div>
      </div>

      <div className="dashboard-cards">

        <div className="card">
          <h3>Pending Approvals</h3>
          <h2>12</h2>
        </div>

        <div className="card">
          <h3>Fault Reports</h3>
          <h2>6</h2>
        </div>

        <div className="card">
          <h3>Equipment Managed</h3>
          <h2>27</h2>
        </div>

      </div>

    </div>
  );
}

export default FacultyProfile;