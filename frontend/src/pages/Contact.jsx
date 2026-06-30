import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.subject.trim()) {
      setError("Subject is required");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Message is required");
      return false;
    }
    if (formData.message.trim().length < 10) {
      setError("Message must be at least 10 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Contact form submitted:", formData);
      setSubmitted(true);
      setLoading(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          category: "general",
          message: "",
        });
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1>Contact Us</h1>
        <p>Get in touch with the LabSync AI team</p>
      </div>

      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info-section">
          <h2>Contact Information</h2>

          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email Support</h3>
            <p>support@labsync.ai</p>
            <span className="contact-meta">Response time: 24 hours</span>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Phone</h3>
            <p>+91-XXXX-XXX-XXX</p>
            <span className="contact-meta">Monday - Friday, 9 AM - 5 PM</span>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Office Address</h3>
            <p>Smart Lab Management</p>
            <p>Engineering College</p>
            <span className="contact-meta">Laboratory Building, 2nd Floor</span>
          </div>

          <div className="contact-card">
            <div className="contact-icon">💬</div>
            <h3>FAQ & Support</h3>
            <p>Visit our help center</p>
            <a href="#" className="contact-link">
              Browse FAQ →
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <h2>Send us a Message</h2>

          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              {error && <div className="form-error">{error}</div>}

              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="booking">Booking Issue</option>
                  <option value="equipment">Equipment Problem</option>
                  <option value="feedback">Feedback</option>
                  <option value="bug">Report a Bug</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>📅 How do I book equipment?</h3>
            <p>
              Log in to your account, navigate to Equipment, select the item you need, and
              submit a booking request. Faculty will review and approve your request.
            </p>
          </div>
          <div className="faq-item">
            <h3>⏰ Can I cancel a booking?</h3>
            <p>
              Yes, you can cancel up to 2 hours before your scheduled time. Contact faculty for
              late cancellations.
            </p>
          </div>
          <div className="faq-item">
            <h3>🔧 How do I report equipment issues?</h3>
            <p>
              Use the "Report Fault" section to document any issues with equipment. Include
              photos if possible.
            </p>
          </div>
          <div className="faq-item">
            <h3>👥 Who approves equipment bookings?</h3>
            <p>
              Faculty members assigned to your department review and approve all equipment
              booking requests.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
