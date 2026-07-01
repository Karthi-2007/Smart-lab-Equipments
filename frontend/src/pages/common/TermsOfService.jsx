import React from "react";
import "./Common.css";

function TermsOfService() {
  return (
    <div className="common-page">

      <div className="page-header">
        <h1>📜 Terms of Service</h1>
        <p>Please read these terms before using LabSync AI.</p>
      </div>

      <div className="common-card">

        <section className="policy-section">
          <h3>Equipment Booking</h3>

          <p>
            Equipment must be booked only for academic purposes.
            Unauthorized usage is strictly prohibited.
          </p>

        </section>

        <section className="policy-section">
          <h3>User Responsibilities</h3>

          <p>
            Users are responsible for handling equipment carefully
            and reporting faults immediately.
          </p>

        </section>

        <section className="policy-section">
          <h3>Booking Cancellation</h3>

          <p>
            Repeated no-shows may result in temporary suspension
            of booking privileges.
          </p>

        </section>

        <section className="policy-section">
          <h3>Maintenance</h3>

          <p>
            Equipment under maintenance cannot be booked until
            approved by the laboratory administrator.
          </p>

        </section>

      </div>

    </div>
  );
}

export default TermsOfService;