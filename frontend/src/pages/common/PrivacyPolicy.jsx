import React from "react";
import "./Common.css";

function PrivacyPolicy() {
  return (
    <div className="common-page">
      <div className="page-header">
        <h1>🔒 Privacy Policy</h1>
        <p>LabSync AI values your privacy and protects your personal information.</p>
      </div>

      <div className="common-card">

        <section className="policy-section">
          <h3>1. Information We Collect</h3>
          <p>
            We collect user information such as Name, Email,
            Department, Registration Number, Booking History,
            Equipment Usage, and Fault Reports.
          </p>
        </section>

        <section className="policy-section">
          <h3>2. How We Use Information</h3>
          <p>
            Your information is used only for equipment booking,
            maintenance prediction, authentication, analytics,
            and improving laboratory services.
          </p>
        </section>

        <section className="policy-section">
          <h3>3. Data Protection</h3>
          <p>
            All information is stored securely and is accessible
            only to authorized faculty and administrators.
          </p>
        </section>

        <section className="policy-section">
          <h3>4. User Rights</h3>
          <p>
            Users may update their profile information and request
            deletion of their account through the administrator.
          </p>
        </section>

      </div>
    </div>
  );
}

export default PrivacyPolicy;