import { useState } from "react";
import StudentSidebar from "../../components/StudentSidebar";
import { useAuth } from "../../context/AuthContext";
import "../Dashboard.css";
import "./Profile.css";

function Profile() {
  const { user } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name:   user?.name  || "Student",
    email:  user?.email || "student@lab.com",
    regNo:  user?.regNo || "717824226",
    dept:   user?.dept  || "Information Technology",
    year:   user?.year  || "2nd Year",
    phone:  "9876543210",
    college: "Karpagam College of Engineering",
  });

  const initials = profile.name
    .split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

  const handleChange = (e) =>
    setProfile((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSave = () => setEditMode(false);

  const STATS = [
    { label: "Total Bookings", value: "24", emoji: "📅" },
    { label: "Usage Hours",    value: "86h", emoji: "🕐" },
    { label: "Fault Reports",  value: "3",   emoji: "🔧" },
    { label: "Appraisal Score",value: "92",  emoji: "🏅" },
  ];

  const ACTIVITY = [
    { text: "Booked Digital Oscilloscope",  time: "2 days ago", icon: "📟" },
    { text: "Filed fault report for 3D Printer", time: "4 days ago", icon: "🚨" },
    { text: "Completed CNC Machine session",     time: "5 days ago", icon: "⚙️" },
    { text: "Booked Arduino Uno Kit",            time: "1 week ago", icon: "🤖" },
  ];

  return (
    <div className="sd-root">
      <StudentSidebar />

      <main className="sd-main">
        {/* Topbar */}
        <header className="sd-topbar">
          <div>
            <p className="sd-topbar-breadcrumb">Student Portal</p>
            <h1 className="sd-topbar-title">My Profile</h1>
          </div>
          <div className="sd-topbar-right">
            {editMode ? (
              <>
                <button className="pf-btn-secondary" onClick={() => setEditMode(false)}>Cancel</button>
                <button className="pf-btn-primary" onClick={handleSave}>Save Changes</button>
              </>
            ) : (
              <button className="pf-btn-primary" onClick={() => setEditMode(true)}>✏️ Edit Profile</button>
            )}
          </div>
        </header>

        <div className="pf-layout">
          {/* Left column */}
          <div className="pf-left">
            {/* Avatar card */}
            <div className="pf-avatar-card">
              <div className="pf-avatar-circle">{initials}</div>
              <h2 className="pf-name">{profile.name}</h2>
              <span className="pf-role-badge">🎓 Student</span>
              <p className="pf-college">{profile.college}</p>
              <div className="pf-divider" />
              <div className="pf-meta-row">
                <span>📘</span>
                <span>{profile.dept}</span>
              </div>
              <div className="pf-meta-row">
                <span>🎯</span>
                <span>{profile.year}</span>
              </div>
              <div className="pf-meta-row">
                <span>🪪</span>
                <span>{profile.regNo}</span>
              </div>
            </div>

            {/* Appraisal score */}
            <div className="pf-score-card">
              <div className="pf-score-label">Appraisal Score</div>
              <div className="pf-score-num">92</div>
              <div className="pf-score-bar">
                <div className="pf-score-fill" style={{ width: "92%" }} />
              </div>
              <div className="pf-score-sub">Excellent — Top 10% of students</div>
            </div>
          </div>

          {/* Right column */}
          <div className="pf-right">
            {/* Stats */}
            <div className="pf-stats-grid">
              {STATS.map((s) => (
                <div className="pf-stat-card" key={s.label}>
                  <div className="pf-stat-emoji">{s.emoji}</div>
                  <div className="pf-stat-val">{s.value}</div>
                  <div className="pf-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Info card */}
            <div className="pf-info-card">
              <h3 className="pf-card-title">Personal Information</h3>
              <div className="pf-info-grid">
                {[
                  { label: "Full Name",      name: "name",  value: profile.name },
                  { label: "Register No.",   name: "regNo", value: profile.regNo },
                  { label: "Email",          name: "email", value: profile.email },
                  { label: "Phone",          name: "phone", value: profile.phone },
                  { label: "Department",     name: "dept",  value: profile.dept },
                  { label: "Year",           name: "year",  value: profile.year },
                ].map((f) => (
                  <div className="pf-info-field" key={f.name}>
                    <label>{f.label}</label>
                    {editMode ? (
                      <input
                        name={f.name}
                        value={f.value}
                        onChange={handleChange}
                        className="pf-edit-input"
                      />
                    ) : (
                      <p>{f.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="pf-activity-card">
              <h3 className="pf-card-title">Recent Activity</h3>
              <div className="pf-activity-list">
                {ACTIVITY.map((a, i) => (
                  <div className="pf-activity-item" key={i}>
                    <div className="pf-activity-icon">{a.icon}</div>
                    <div className="pf-activity-text">
                      <p>{a.text}</p>
                      <span>{a.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;