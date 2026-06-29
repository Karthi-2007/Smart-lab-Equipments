import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "STUDENT",
    regNo: "",
    department: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.regNo.trim()) {
      newErrors.regNo = "Registration number is required";
    }
    if (!formData.department) {
      newErrors.department = "Please select a department";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setSuccessMessage("");

    setTimeout(() => {
      const result = register(formData);
      if (result.success) {
        setSuccessMessage("Registration successful! Redirecting...");
        setTimeout(() => {
          if (result.role === "STUDENT") navigate("/student/dashboard");
          else if (result.role === "FACULTY") navigate("/faculty/dashboard");
          else navigate("/admin/dashboard");
        }, 1500);
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-logo">⚗</div>
        <h1>Join LabSync <span>AI</span></h1>
        <p className="register-subtitle">Create Your Account</p>

        {successMessage && <div className="success-message">{successMessage}</div>}

        <form onSubmit={handleSubmit} className="register-form">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          {/* Role Selection */}
          <div className="form-group">
            <label htmlFor="role">Account Type</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="STUDENT">Student</option>
              <option value="FACULTY">Faculty</option>
              <option value="ADMIN">Administrator</option>
            </select>
          </div>

          {/* Registration Number */}
          <div className="form-group">
            <label htmlFor="regNo">
              {formData.role === "STUDENT" ? "Roll Number" : "ID Number"}
            </label>
            <input
              id="regNo"
              type="text"
              name="regNo"
              placeholder={formData.role === "STUDENT" ? "Enter your roll number" : "Enter your ID number"}
              value={formData.regNo}
              onChange={handleChange}
              className={errors.regNo ? "error" : ""}
            />
            {errors.regNo && <span className="error-text">{errors.regNo}</span>}
          </div>

          {/* Department */}
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={errors.department ? "error" : ""}
            >
              <option value="">Select your department</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Electronics">Electronics</option>
              <option value="Electrical">Electrical</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
              <option value="Computer Science">Computer Science</option>
            </select>
            {errors.department && <span className="error-text">{errors.department}</span>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter a strong password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "error" : ""}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? "error" : ""}
            />
            {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Login Link */}
        <p className="login-link">
          Already have an account? <Link to="/login">Sign in here</Link>
        </p>

        {/* Terms */}
        <div className="terms">
          <p>
            By registering, you agree to our <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
