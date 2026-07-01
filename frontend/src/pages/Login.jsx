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
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setError("");
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  


    const email = user.email.trim();
const password = user.password.trim();

if (!email || !password) {
  setError("Email and Password are required.");
  setLoading(false);
  return;
}

if (!/\S+@\S+\.\S+/.test(email)) {
  setError("Please enter a valid email address.");
  setLoading(false);
  return;
}

if (password.length < 6) {
  setError("Password must be at least 6 characters.");
  setLoading(false);
  return;
}

    // Simulate slight delay for realism
    try{
      const result = login(user.email.trim(),user.password.trim());
     if (result.success) {
  if (result.role === "STUDENT") {
    navigate("/student/dashboard");
  } else if (result.role === "FACULTY") {
    navigate("/faculty/dashboard");
  } else if (result.role === "ADMIN") {
    navigate("/admin/dashboard");
  }
} else {
  setError(result.message);
}
    }
    catch(error){
      setError(error.message);
    }
    finally{
        setLoading(false);
      }
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
              disabled={loading}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <button
            type="button"
            className="password-toggle"
             onClick={() => setShowPassword(!showPassword)}
            >
           {showPassword ? "🙈" : "👁️"}
           </button>
          </div>
          <Link to="/forgot-password">
          Forgot Password?
          </Link> 

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
          <button
          type="button"
          onClick={()=>
          setUser({
          email:"student@lab.com",
          password:"student123"
          })
          }
          >Student Demo
          </button>&nbsp;&nbsp;
          <button
          type="button"
          onClick={()=>
          setUser({
          email:"faculty@lab.com",
          password:"faculty123"
          })
          }
          >Faculty Demo
          </button>&nbsp;&nbsp;
          <button
          type="button"
          onClick={()=>
          setUser({
          email:"admin@lab.com",
          password:"admin123"
          })
          }
          >Admin Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
