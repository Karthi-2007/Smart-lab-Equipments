import React, { useState } from "react";
import "./Common.css";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  return (
    <div className="common-page">
      <div className="page-header">
        <h1>⚙️ Settings</h1>
        <p>Customize your LabSync AI preferences.</p>
      </div>

      <div className="common-card">

        <div className="setting-item">
          <div>
            <h3>🌙 Dark Mode</h3>
            <p>Enable dark theme for the application.</p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="setting-item">
          <div>
            <h3>📧 Email Notifications</h3>
            <p>Receive booking and maintenance updates.</p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() =>
                setEmailNotifications(!emailNotifications)
              }
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="setting-item">
          <div>
            <h3>📱 SMS Notifications</h3>
            <p>Receive important alerts via SMS.</p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={smsNotifications}
              onChange={() =>
                setSmsNotifications(!smsNotifications)
              }
            />
            <span className="slider"></span>
          </label>
        </div>

        <button className="save-btn">
          💾 Save Settings
        </button>

      </div>
    </div>
  );
}

export default Settings;