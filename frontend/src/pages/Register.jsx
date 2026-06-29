import { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    regNo: "",
    department: "",
    role: "STUDENT",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setError("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const result = register(formData);
      if (result.success) {
        if (result.role === "STUDENT") navigate("/student/dashboard");
        else if (result.role === "FACULTY") navigate("/faculty/dashboard");
        else navigate("/admin/dashboard");
      }
    }, 600);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-logo">⚗</div>
        <h1>LabSync <span>AI</span></h1>
        <p className="register-subtitle">Create your Smart Lab account</p>

        {error && <div className="register-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="reg-row">
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" name="name" placeholder="Your full name"
                value={formData.name} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Register Number</label>
              <input type="text" name="regNo" placeholder="e.g. 717824226"
                value={formData.regNo} onChange={handleChange} required />
            </div>
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="your@email.com"
              value={formData.email} onChange={handleChange} required />
          </div>

          <div className="reg-row">
            <div className="input-group">
              <label>Department</label>
              <select name="department" value={formData.department} onChange={handleChange} required>
                <option value="">Select Department</option>
                <option>Information Technology</option>
                <option>Computer Science</option>
                <option>Electronics & Communication</option>
                <option>Electrical Engineering</option>
                <option>Mechanical Engineering</option>
                <option>Civil Engineering</option>
              </select>
            </div>
            <div className="input-group">
              <label>Role</label>
              <select name="role" value={formData.role} onChange={handleChange}>
                <option value="STUDENT">Student</option>
                <option value="FACULTY">Faculty</option>
              </select>
            </div>
          </div>

          <div className="reg-row">
            <div className="input-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Min 6 characters"
                value={formData.password} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword" placeholder="Re-enter password"
                value={formData.confirmPassword} onChange={handleChange} required />
            </div>
          </div>

          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="register-login-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;