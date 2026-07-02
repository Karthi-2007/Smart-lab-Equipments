import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EquipmentList.css";
import { useData } from "../../context/DataContext";


function EquipmentList() {
  const navigate = useNavigate();
  const { equipment, stats } = useData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");

  const categories = [
    "all",
    ...new Set(equipment.map((item) => item.category)),
  ];

  const filteredEquipment = useMemo(() => {
    return equipment.filter((item) => {
      const searchMatch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      const categoryMatch = category === "all" || item.category === category;
      const statusMatch = status === "all" || item.status === status;

      return searchMatch && categoryMatch && statusMatch;
    });
  }, [search, category, status, equipment]);

  return (
    <div className="equipment-page">

      {/* Header */}

      <div className="equipment-header">
        <div>
          <h1>🔬 Laboratory Equipment</h1>
          <p>
            Browse available laboratory equipment and make smart bookings.
          </p>
        </div>
      </div>

      {/* Statistics */}

      <div className="equipment-stats">

        <div className="stat-card">
          <h2>{stats.totalEquipment}</h2>
          <span>Total Equipment</span>
        </div>

       <div className="stat-card available">
       <h2>{stats.availableEquipment}</h2>
       <span>Available</span>
        </div>

        <div className="stat-card inuse">
        <h2>{stats.bookedEquipment}</h2>
        <span>In Use</span>
        </div>

        <div className="stat-card maintenance">
        <h2>{stats.maintenanceEquipment}</h2>
        <span>Maintenance</span>
        </div>

      </div>

      {/* Filters */}

      <div className="filter-container">

        <input
          type="text"
          placeholder="Search equipment..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
           {cat}
          </option>
          ))}
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="available">Available</option>
          <option value="in-use">In Use</option>
          <option value="maintenance">Maintenance</option>
        </select>

      </div>

      {/* Result Count */}

      <div className="result-count">
        Showing <strong>{filteredEquipment.length}</strong> of{" "}
        <strong>{equipment.length}</strong> equipment
      </div>

      {/* Equipment Grid */}

      <div className="equipment-grid">

        {filteredEquipment.map((equipment) => {

          const health =
            equipment.status === "available"
              ? 96
              : equipment.status === "in-use"
              ? 82
              : 55;

          const risk =
            health >= 90
              ? "Low"
              : health >= 70
              ? "Medium"
              : "High";

          return (
            <div
              key={equipment.id}
              className="equipment-card"
            >

              <div className="equipment-top">
  <div className="equipment-image">
    <img
      src={equipment.image}
      alt={equipment.name}
      className="equipment-img"
    />
  </div>

  <div className="status-wrapper">
    <span className={`status ${equipment.status}`}>
      {equipment.status.toUpperCase()}
    </span>
  </div>
</div>

              <h3>{equipment.name}</h3>

              <p className="equipment-category">
                {equipment.category}
              </p>

              <p className="equipment-description">
                {equipment.description}
              </p>

              <div className="equipment-details">

                <p><strong>Lab:</strong> {equipment.labName}</p>
<p><strong>Asset ID:</strong> {equipment.assetId}</p>
<p><strong>Condition:</strong> {equipment.condition}</p>
<p><strong>Last Maintenance:</strong> {equipment.lastMaintenance}</p>
<p><strong>Next Maintenance:</strong> {equipment.nextMaintenance}</p>
<p><strong>Utilization:</strong> {equipment.utilizationRate}</p>
<p><strong>Total Bookings:</strong> {equipment.totalBookings}</p>   

              </div>

              {/* AI Prediction */}

              <div className="prediction-box">

                <h4>🤖 AI Prediction</h4>

                <p>
                  Equipment Health :
                  <strong> {health}%</strong>
                </p>

                <p>
                  Maintenance Risk :
                  <strong> {risk}</strong>
                </p>

                <progress
                  value={health}
                  max="100"
                ></progress>

              </div>

              <div className="equipment-footer">

                {equipment.status === "available" ? (
                  <button
                    className="book-btn"
                    onClick={() =>
                      navigate("/student/book", {
                        state: {
                          equipment,
                        },
                      })
                    }
                  >
                    📅 Book Equipment
                  </button>
                ) : (
                  <button
                    disabled
                    className="disabled-btn"
                  >
                    Not Available
                  </button>
                )}

              </div>

            </div>
          );
        })}
      </div>

      {filteredEquipment.length === 0 && (
        <div className="no-data">

          <h2>No Equipment Found</h2>

          <p>
            Try changing your search or filter.
          </p>

        </div>
      )}
    </div>
  );
}

export default EquipmentList;