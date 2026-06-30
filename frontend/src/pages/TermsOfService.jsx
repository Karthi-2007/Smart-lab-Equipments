import { useNavigate } from "react-router-dom";
import "./TermsOfService.css";

function TermsOfService() {
  const navigate = useNavigate();

  return (
    <div className="legal-page">
      <div className="legal-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1>Terms of Service</h1>
        <p className="last-updated">Last updated: June 2026</p>
      </div>

      <div className="legal-content">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the LabSync AI platform ("Service"), you accept and agree to
            be bound by the terms and provision of this agreement. If you do not agree to abide
            by the above, please do not use this service.
          </p>
        </section>

        <section>
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information
            or software) on LabSync AI for personal, non-commercial transitory viewing only.
            This is the grant of a license, not a transfer of title, and under this license you
            may not:
          </p>
          <ul>
            <li>Modify or copy the materials (including HTML)</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software</li>
            <li>Remove any copyright or other proprietary notations</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            <li>Access or search the service by any means other than the application's navigation</li>
          </ul>
        </section>

        <section>
          <h2>3. Equipment Usage</h2>
          <p>Users agree to:</p>
          <ul>
            <li>Use equipment only for authorized educational purposes</li>
            <li>Handle all equipment with care and responsibility</li>
            <li>Return equipment in the same condition as received</li>
            <li>Report any damage or malfunctions immediately</li>
            <li>Follow all safety guidelines and protocols</li>
            <li>Not share equipment access credentials or booking slots</li>
            <li>Pay for any damages caused due to negligence</li>
          </ul>
        </section>

        <section>
          <h2>4. Booking Policy</h2>
          <p>
            Equipment bookings are subject to approval by faculty supervisors. We reserve the
            right to modify, reschedule, or cancel bookings due to maintenance, repairs, or
            system requirements. Cancellations must be made at least 2 hours before the scheduled
            time.
          </p>
        </section>

        <section>
          <h2>5. User Responsibilities</h2>
          <p>You are responsible for:</p>
          <ul>
            <li>Maintaining confidentiality of your login credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of unauthorized access</li>
            <li>Providing accurate and complete information during registration</li>
            <li>Maintaining current contact information</li>
          </ul>
        </section>

        <section>
          <h2>6. Prohibited Activities</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Harass, threaten, or harm any individual or group</li>
            <li>Transmit viruses, malware, or malicious code</li>
            <li>Attempt unauthorized access to systems or accounts</li>
            <li>Interfere with service operations or network connectivity</li>
            <li>Engage in any form of fraud or misrepresentation</li>
          </ul>
        </section>

        <section>
          <h2>7. Disclaimer of Warranties</h2>
          <p>
            The materials on LabSync AI are provided on an 'as-is' basis. LabSync AI makes no
            warranties, expressed or implied, and hereby disclaims and negates all other warranties
            including, without limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of intellectual property or other
            violation of rights.
          </p>
        </section>

        <section>
          <h2>8. Limitations of Liability</h2>
          <p>
            In no event shall LabSync AI or its suppliers be liable for any damages (including,
            without limitation, damages for loss of data or profit, or due to business interruption)
            arising out of the use or inability to use the materials on LabSync AI, even if we or
            our authorized representative has been notified orally or in writing of the possibility
            of such damage.
          </p>
        </section>

        <section>
          <h2>9. Accuracy of Materials</h2>
          <p>
            The materials appearing on LabSync AI could include technical, typographical, or
            photographic errors. LabSync AI does not warrant that any of the materials on our
            Internet web site are accurate, complete, or current. LabSync AI may make changes to
            the materials contained on its web site at any time without notice.
          </p>
        </section>

        <section>
          <h2>10. Links</h2>
          <p>
            LabSync AI has not reviewed all of the sites linked to its Internet web site and is
            not responsible for the contents of any such linked site. The inclusion of any link
            does not imply endorsement by LabSync AI of the site. Use of any such linked web site
            is at the user's own risk.
          </p>
        </section>

        <section>
          <h2>11. Modifications</h2>
          <p>
            LabSync AI may revise these terms of service for its web site at any time without
            notice. By using this web site you are agreeing to be bound by the then current version
            of these terms of service.
          </p>
        </section>

        <section>
          <h2>12. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws
            of the institution and you irrevocably submit to the exclusive jurisdiction of the
            courts in that location.
          </p>
        </section>

        <section>
          <h2>13. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <div className="contact-info">
            <p><strong>Email:</strong> support@labsync.ai</p>
            <p><strong>Phone:</strong> +91-XXXX-XXX-XXX</p>
            <p><strong>Address:</strong> Smart Lab Management, Engineering College</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TermsOfService;
