import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./student/EquipmentList.css";
import { MOCK_EQUIPMENT } from "../data/mockData";

function EquipmentList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Get unique categories
  const categories = ["all", ...new Set(MOCK_EQUIPMENT.map(e => e.category))];
  const statuses = ["all", "available", "in-use", "maintenance"];

  // Filter equipment
  let filteredEquipment = MOCK_EQUIPMENT.filter(eq => {
    const matchesSearch = eq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         eq.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || eq.category === selectedCategory;
    const matchesStatus = selectedStatus === "all" || eq.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="equipment-list-page">
      <div className="page-header">
        <h1>🔬 Laboratory Equipment</h1>
        <p>Browse and book available equipment for your experiments</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filter-group">
          <input
            type="text"
            placeholder="🔍 Search equipment..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-group">
          <label>Category:</label>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1).replace(/([A-Z])/g, ' $1')}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Status:</label>
          <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
            {statuses.map(status => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1).replace(/([A-Z])/g, ' $1')}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="results-info">
        <p>Showing {filteredEquipment.length} of {MOCK_EQUIPMENT.length} equipment</p>
      </div>

      {/* Equipment Grid */}
      {filteredEquipment.length > 0 ? (
        <div className="equipment-grid">
          {filteredEquipment.map(equipment => (
            <div key={equipment.id} className="equipment-card">
              <div className="card-header">
                <span className="equipment-icon">{equipment.image}</span>
                <span className={`status-badge status-${equipment.status}`}>
                  {equipment.status.replace('-', ' ').toUpperCase()}
                </span>
              </div>

              <div className="card-body">
                <h3>{equipment.name}</h3>
                <p className="category">📦 {equipment.category}</p>
                <p className="description">{equipment.description}</p>
                <div className="specs">
                  <p><strong>Specifications:</strong></p>
                  <p>{equipment.specifications}</p>
                </div>
                <div className="meta-info">
                  <p>📍 {equipment.location}</p>
                  <p>🔧 Last serviced: {equipment.lastServiced}</p>
                  <p>📅 Next maintenance: {equipment.maintenanceDate}</p>
                  <p>📊 {equipment.bookingsPerWeek} bookings/week</p>
                </div>
              </div>

              <div className="card-footer">
                {equipment.status === 'available' ? (
                  <button
                    className="btn btn-book"
                    onClick={() => navigate("/student/book", { state: { equipmentId: equipment.id } })}
                  >
                    📅 Book Now
                  </button>
                ) : (
                  <button className="btn btn-disabled" disabled>
                    ❌ Not Available
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>😔 No equipment found matching your filters.</p>
          <p>Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
}

export default EquipmentList;
