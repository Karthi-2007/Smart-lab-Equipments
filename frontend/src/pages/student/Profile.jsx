import React, { useState } from "react";
import "./Profile.css";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function Profile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "+91 98765 43210",
    department: user?.dept || "",
    year: user?.year || "",
    regNo: user?.regNo || "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSave = () => {
    setSuccessMessage("✅ Profile updated successfully!");
    setIsEditing(false);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="profile-page">
      <div className="page-header">
        <h1>👤 My Profile</h1>
        <p>Manage your account information</p>
      </div>

      <div className="profile-container">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar">
              <span className="avatar-text">👨‍🎓</span>
            </div>
            <div className="profile-title">
              <h2>{profileData.name}</h2>
              <p className="role">{user?.role}</p>
            </div>
            <button
              className="btn-edit"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "✏️ Edit"}
            </button>
          </div>

          {successMessage && <div className="success-message">{successMessage}</div>}

          <div className="profile-info">
            {/* Contact Information */}
            <div className="info-section">
              <h3>📧 Contact Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>Email Address</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleChange}
                    />
                  ) : (
                    <p>{profileData.email}</p>
                  )}
                </div>
                <div className="info-item">
                  <label>Phone Number</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleChange}
                    />
                  ) : (
                    <p>{profileData.phone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="info-section">
              <h3>🎓 Academic Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>Registration Number</label>
                  <p>{profileData.regNo}</p>
                </div>
                <div className="info-item">
                  <label>Department</label>
                  {isEditing ? (
                    <select name="department" value={profileData.department} onChange={handleChange}>
                      <option>Information Technology</option>
                      <option>Electronics</option>
                      <option>Electrical</option>
                      <option>Mechanical</option>
                      <option>Civil</option>
                    </select>
                  ) : (
                    <p>{profileData.department}</p>
                  )}
                </div>
                <div className="info-item">
                  <label>Year</label>
                  {isEditing ? (
                    <select name="year" value={profileData.year} onChange={handleChange}>
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th Year</option>
                    </select>
                  ) : (
                    <p>{profileData.year}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="info-section">
              <h3>ℹ️ Additional Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>Account Type</label>
                  <p className="badge">{user?.role}</p>
                </div>
                <div className="info-item">
                  <label>Account Status</label>
                  <p className="badge active">Active</p>
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="edit-actions">
                <button className="btn btn-save" onClick={handleSave}>
                  💾 Save Changes
                </button>
                <button className="btn btn-cancel" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h3>⚡ Quick Actions</h3>
          <div className="action-cards">
            {[
              { to: "/student/dashboard", icon: "📊", text: "Dashboard" },
              { to: "/student/equipment", icon: "🔧", text: "Equipment" },
              { to: "/student/book", icon: "📅", text: "Book Equipment" },
              { to: "/student/usage", icon: "📈", text: "Usage History" },
              { to: "/student/fault", icon: "⚠️", text: "Report Fault" },
            ].map((action) => (
              <Link to={action.to} className="action-card" key={action.to}>
                <span className="icon">{action.icon}</span>
                <span className="text">{action.text}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Security & Privacy */}
        <div className="security-section">
          <h3>🔒 Security & Privacy</h3>
          <div className="security-items">
            <div className="security-item">
              <h4>Change Password</h4>
              <p>Update your account password regularly for security</p>
              <button className="btn btn-secondary">Change Password</button>
            </div>
            <div className="security-item">
              <h4>Two-Factor Authentication</h4>
              <p>Add an extra layer of security to your account</p>
              <button className="btn btn-secondary">Enable 2FA</button>
            </div>
            <div className="security-item">
              <h4>Account Activity</h4>
              <p>View recent login activity and manage sessions</p>
              <button className="btn btn-secondary">View Activity</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
