import { useNavigate } from "react-router-dom";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="legal-page">
      <div className="legal-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: June 2026</p>
      </div>

      <div className="legal-content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to LabSync AI (Smart Lab Equipment Booking and Predictive Maintenance Platform).
            We are committed to protecting your privacy. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our platform.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, registration number, department, year of study</li>
            <li><strong>Usage Data:</strong> Equipment bookings, usage history, fault reports, access logs</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device information, cookies</li>
            <li><strong>Location Data:</strong> Lab location and equipment location preferences</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect for purposes including:</p>
          <ul>
            <li>Providing and maintaining the Smart Lab equipment booking service</li>
            <li>Processing equipment reservations and approvals</li>
            <li>Tracking equipment usage and maintenance schedules</li>
            <li>Generating usage reports and analytics</li>
            <li>Improving our platform and services</li>
            <li>Communicating important updates and notifications</li>
            <li>Ensuring security and preventing fraudulent activities</li>
            <li>Complying with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction. However,
            no method of transmission over the Internet is 100% secure, and we cannot guarantee
            absolute security.
          </p>
        </section>

        <section>
          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide our services
            and fulfill the purposes outlined in this policy. You may request deletion of your
            account and associated data at any time.
          </p>
        </section>

        <section>
          <h2>6. Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share your information with:
          </p>
          <ul>
            <li>Faculty members (for equipment booking approvals)</li>
            <li>Administrative staff (for system management)</li>
            <li>Service providers who assist in maintaining our platform</li>
            <li>Legal authorities if required by law</li>
          </ul>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your account</li>
            <li>Opt-out of non-essential communications</li>
            <li>Request a copy of your data in a portable format</li>
          </ul>
        </section>

        <section>
          <h2>8. Cookies</h2>
          <p>
            Our platform uses cookies and similar technologies to enhance your experience,
            remember your preferences, and analyze usage patterns. You can control cookie settings
            through your browser preferences.
          </p>
        </section>

        <section>
          <h2>9. Third-Party Links</h2>
          <p>
            Our platform may contain links to external websites. We are not responsible for the
            privacy practices of third-party sites. Please review their privacy policies before
            providing any information.
          </p>
        </section>

        <section>
          <h2>10. Policy Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any
            significant changes via email or prominent notice on our platform.
          </p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our privacy practices, please
            contact us at:
          </p>
          <div className="contact-info">
            <p><strong>Email:</strong> privacy@labsync.ai</p>
            <p><strong>Phone:</strong> +91-XXXX-XXX-XXX</p>
            <p><strong>Address:</strong> Smart Lab Management, Engineering College</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
