import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const DEMO_USERS = [
  "student@lab.com",
  "faculty@lab.com",
  "admin@lab.com",
];

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (DEMO_USERS.includes(email.toLowerCase())) {
        setMessage(
          "Password reset link has been sent to your email (Demo)."
        );
      } else {
        setError("No account found with this email.");
      }

      setLoading(false);
    }, 1200);
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">

        <div className="forgot-logo">⚗️</div>

        <h1>Forgot Password</h1>

        <p>
          Enter your registered email address and we'll send you a password
          reset link.
        </p>

        {error && <div className="error-box">{error}</div>}
        {message && <div className="success-box">{message}</div>}

        <form onSubmit={handleSubmit}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

        </form>

        <div className="back-login">
          <Link to="/login">← Back to Login</Link>
        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;