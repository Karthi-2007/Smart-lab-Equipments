import { Link } from "react-router-dom";
import "../Dashboard.css";
import { useData } from "../../context/DataContext";
import React from "react";

function UserManagement() {
  const { users } = useData();

  return (
    <main className="dashboard">
      <header className="review-header">
        <div>
          <p className="review-eyebrow">Admin Portal</p>
          <h1>User Management</h1>
        </div>
        <Link to="/admin/dashboard" className="ghost-link">Back to Dashboard</Link>
      </header>

      <section className="data-card">
        <div className="data-card-header">
          <h2>Registered Users</h2>
          <button type="button" className="primary-action">Add User</button>
        </div>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Department</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
           <tbody>
  {users.map((user) => (
    <tr key={user.id}>
      <td>{user.userId}</td>

      <td className="strong-cell">
        {user.name}
      </td>

      <td>{user.role}</td>

      <td>{user.department}</td>

      <td>
        <span
          className={`status-pill ${
            user.status === "active"
              ? "is-success"
              : "is-warning"
          }`}
        >
          {user.status}
        </span>
      </td>

      <td>
        <button
          type="button"
          className="text-action"
        >
          View
        </button>
      </td>
    </tr>
  ))}
</tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default UserManagement;
