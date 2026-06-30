import { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setError("");
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate slight delay for realism
    setTimeout(() => {
      const result = login(user.email, user.password);
      if (result.success) {
        if (result.role === "STUDENT") navigate("/student/dashboard");
        else if (result.role === "FACULTY") navigate("/faculty/dashboard");
        else if (result.role === "ADMIN")   navigate("/admin/dashboard");
      } else {
        setError(result.message);
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">⚗</div>
        <h1>LabSync <span>AI</span></h1>
        <p className="login-subtitle">Smart Lab Equipment Booking & Predictive Maintenance</p>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="login-register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>

        {/* Demo credentials hint */}
        <div className="login-demo">
          <p>Demo credentials:</p>
          <code>student@lab.com / student123</code>
          <code>faculty@lab.com / faculty123</code>
          <code>admin@lab.com / admin123</code>
        </div>
      </div>
    </div>
  );
}

export default Login;
