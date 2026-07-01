import React from "react";
import "./Common.css";

function Help() {
  return (
    <div className="common-page">

      <div className="page-header">
        <h1>❓ Help & Support</h1>
        <p>Need assistance? We're here to help.</p>
      </div>

      <div className="common-card">

        <div className="help-item">
          <h3>📅 Equipment Booking</h3>
          <p>
            Browse available equipment, select your preferred
            date & time, and submit a booking request.
          </p>
        </div>

        <div className="help-item">
          <h3>⚠️ Report Fault</h3>
          <p>
            If equipment is damaged or malfunctioning,
            submit a fault report with complete details.
          </p>
        </div>

        <div className="help-item">
          <h3>🤖 AI Prediction</h3>
          <p>
            The AI engine predicts upcoming maintenance
            based on equipment usage and fault history.
          </p>
        </div>

        <div className="help-item">
          <h3>📞 Contact Support</h3>

          <p>Email : support@labsyncai.com</p>

          <p>Phone : +91 98765 43210</p>

          <p>Working Hours : 9:00 AM - 5:00 PM</p>

        </div>

      </div>
    </div>
  );
}

export default Help;