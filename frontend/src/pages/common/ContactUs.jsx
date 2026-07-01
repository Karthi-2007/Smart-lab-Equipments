import React from "react";
import "./Common.css";

function ContactUs() {
  return (
    <div className="common-page">

      <div className="page-header">
        <h1>📞 Contact Us</h1>
        <p>We are here to help you.</p>
      </div>

      <div className="common-card">

        <div className="contact-card">
          <h3>🏫 LabSync AI Support Team</h3>

          <p>
            <strong>Email:</strong> support@labsyncai.com
          </p>

          <p>
            <strong>Phone:</strong> +91 98765 43210
          </p>

          <p>
            <strong>Address:</strong><br />
            Department of Information Technology<br />
            XYZ Engineering College<br />
            Chennai, Tamil Nadu
          </p>

          <p>
            <strong>Working Hours:</strong><br />
            Monday - Friday<br />
            9:00 AM – 5:00 PM
          </p>
        </div>

      </div>

    </div>
  );
}

export default ContactUs;