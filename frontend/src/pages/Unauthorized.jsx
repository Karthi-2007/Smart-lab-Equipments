import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#f5f5f5",
      }}
    >
      <h1 style={{ fontSize: "70px", color: "#e53935" }}>403</h1>

      <h2>Access Denied</h2>

      <p>
        You don't have permission to access this page.
      </p>

      <Link to="/">
        <button
          style={{
            padding: "10px 20px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default Unauthorized;