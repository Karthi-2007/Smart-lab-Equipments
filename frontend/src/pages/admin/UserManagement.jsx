import { Link } from "react-router-dom";
import "../Dashboard.css";

const users = [
  { id: "717824226", name: "Karthikeyan S", role: "Student", dept: "IT", status: "Active" },
  { id: "717824227", name: "Hariharan A", role: "Student", dept: "CSE", status: "Active" },
  { id: "FAC001", name: "Dr. Priya R", role: "Faculty", dept: "ECE", status: "Active" },
  { id: "FAC002", name: "Dr. Mahesh K", role: "Faculty", dept: "Mechanical", status: "Review" },
  { id: "ADM001", name: "Admin User", role: "Admin", dept: "Administration", status: "Active" },
];

function UserManagement() {
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
                  <td>{user.id}</td>
                  <td className="strong-cell">{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.dept}</td>
                  <td>
                    <span className={`status-pill ${user.status === "Active" ? "is-success" : "is-warning"}`}>
                      {user.status}
                    </span>
                  </td>
                  <td><button type="button" className="text-action">View</button></td>
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
