import React, { useState } from "react";
import { MOCK_EQUIPMENT } from "../../data/mockData";
import "./Faculty.css";

function EquipmentMonitoring() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredEquipment = MOCK_EQUIPMENT.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="faculty-page">
      <div className="page-header">
        <h1>🔧 Equipment Monitoring</h1>
        <p>Monitor laboratory equipment availability and maintenance.</p>
      </div>

      {/* Statistics */}
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Equipment</h3>
          <h2>{MOCK_EQUIPMENT.length}</h2>
        </div>

        <div className="card">
          <h3>Available</h3>
          <h2>
            {
              MOCK_EQUIPMENT.filter((e) => e.status === "available").length
            }
          </h2>
        </div>

        <div className="card">
          <h3>In Use</h3>
          <h2>
            {
              MOCK_EQUIPMENT.filter((e) => e.status === "in-use").length
            }
          </h2>
        </div>

        <div className="card">
          <h3>Maintenance</h3>
          <h2>
            {
              MOCK_EQUIPMENT.filter((e) => e.status === "maintenance").length
            }
          </h2>
        </div>
      </div>

      {/* Filters */}
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search equipment..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All</option>
          <option value="available">Available</option>
          <option value="in-use">In Use</option>
          <option value="maintenance">Maintenance</option>
        </select>
      </div>

      {/* Equipment Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Equipment</th>
              <th>Category</th>
              <th>Location</th>
              <th>Status</th>
              <th>Usage / Week</th>
              <th>Last Service</th>
              <th>Next Maintenance</th>
            </tr>
          </thead>

          <tbody>
            {filteredEquipment.map((equipment) => (
              <tr key={equipment.id}>
                <td>{equipment.id}</td>
                <td>{equipment.name}</td>
                <td>{equipment.category}</td>
                <td>{equipment.location}</td>
                <td>
                  <span
                    className={`status ${equipment.status.replace("-", "")}`}
                  >
                    {equipment.status}
                  </span>
                </td>
                <td>{equipment.bookingsPerWeek}</td>
                <td>{equipment.lastServiced}</td>
                <td>{equipment.maintenanceDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* AI Recommendation */}
      <div className="card" style={{ marginTop: "25px" }}>
        <h3>🤖 AI Recommendation</h3>

        <p>
          Equipment with booking frequency greater than <strong>15 per week</strong>{" "}
          should be inspected within the next 7 days to reduce unexpected
          failures.
        </p>
      </div>
    </div>
  );
}

export default EquipmentMonitoring;