import { Link } from "react-router-dom";
import "../Dashboard.css";
import { useData } from "../../context/DataContext";
import React from "react";

function EquipmentManagement() {
  const { equipment } = useData();

  return (
    <main className="dashboard">
      <header className="review-header">
        <div>
          <p className="review-eyebrow">Admin Portal</p>
          <h1>Equipment Inventory</h1>
        </div>
        <Link to="/admin/dashboard" className="ghost-link">Back to Dashboard</Link>
      </header>

      <section className="data-card">
        <div className="data-card-header">
          <h2>Lab Equipment</h2>
          <button type="button" className="primary-action">Add Equipment</button>
        </div>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>Asset ID</th>
                <th>Equipment</th>
                <th>Lab</th>
                <th>Status</th>
                <th>Utilization</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {equipment.map((item) => (
                <tr key={item.id}>
                  <td>EQ-{item.id}</td>
                  <td className="strong-cell">{item.name}</td>
                  <td>{item.labName}</td>
                  <td>
                    <span
  className={`status-pill ${
    item.status === "available"
      ? "is-success"
      : item.status === "in-use"
      ? "is-info"
      : "is-danger"
  }`}
>
  {item.status}
</span>
                  
                  </td>
                   <td>{item.utilizationRate}</td>
                  <td><button type="button" className="text-action">Update</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default EquipmentManagement;
