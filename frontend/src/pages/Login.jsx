import React, { useState } from "react";
import "./Login.css";
import { Navigate, useNavigate } from "react-router";

function Login() {
  const navigate=useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);

    // API Call Here
    // axios.post("http://localhost:8080/api/auth/login", user)
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Smart Lab Equipment</h1>
        <h3>Login</h3>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
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
              placeholder="Enter Password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
          <p>If you don't have an account plz Register?<a href="/register" target="_parent" style={{lineHeight:"40px"}} >Register</a></p>
        </form>

        <p className="footer-text">
          Smart Lab Equipment Booking & Predictive Maintenance Platform
        </p>
      </div>
    </div>
  );
}

export default Login;