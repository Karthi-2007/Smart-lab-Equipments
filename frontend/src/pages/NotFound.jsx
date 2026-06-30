import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <h1>404</h1>
    <p>Page Not Found</p>

    <Link to="/">
      <button>Go Home</button>
    </Link>
  </div>
);

export default NotFound;