import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./FacultyDashboard.css";
import { MOCK_BOOKINGS, MOCK_FAULTS, STATS } from "../../data/mockData";

function FacultyDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("approvals");
  const [bookings, setBookings] = useState(MOCK_BOOKINGS);

  const pendingBookings = bookings.filter(b => b.status === "pending");
  const allFaults = MOCK_FAULTS;
  const pendingFaults = allFaults.filter(f => f.status === "pending-review");

  const handleApprove = (id) => {
    setBookings(bookings.map(b => 
      b.id === id ? { ...b, status: "confirmed", approvedBy: user?.name } : b
    ));
  };

  const handleReject = (id) => {
    setBookings(bookings.filter(b => b.id !== id));
  };

  return (
    <div className="faculty-dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Faculty Dashboard 👨‍🏫</h1>
          <p>Booking Approvals & Equipment Oversight</p>
        </div>
        <div className="faculty-info-card">
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Department:</strong> {user?.dept}</p>
          <p><strong>ID:</strong> {user?.regNo}</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <h3>{pendingBookings.length}</h3>
            <p>Pending Approvals</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>{bookings.filter(b => b.status === 'confirmed').length}</h3>
            <p>Approved Bookings</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⚠️</div>
          <div className="stat-content">
            <h3>{pendingFaults.length}</h3>
            <p>Faults to Review</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🔧</div>
          <div className="stat-content">
            <h3>{allFaults.filter(f => f.status === 'under-repair').length}</h3>
            <p>Under Repair</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="dashboard-tabs">
        <button
          className={`tab-btn ${activeTab === "approvals" ? "active" : ""}`}
          onClick={() => setActiveTab("approvals")}
        >
          ✓ Booking Approvals
        </button>
        <button
          className={`tab-btn ${activeTab === "faults" ? "active" : ""}`}
          onClick={() => setActiveTab("faults")}
        >
          ⚠️ Fault Reports
        </button>
        <button
          className={`tab-btn ${activeTab === "equipment" ? "active" : ""}`}
          onClick={() => setActiveTab("equipment")}
        >
          📊 Equipment Status
        </button>
      </div>

      {/* Approvals Tab */}
      {activeTab === "approvals" && (
        <div className="tab-content">
          <div className="approvals-section">
            <h3>Pending Booking Approvals</h3>
            {pendingBookings.length > 0 ? (
              <div className="approval-cards">
                {pendingBookings.map(booking => (
                  <div key={booking.id} className="approval-card">
                    <div className="approval-header">
                      <h4>{booking.equipmentName}</h4>
                      <span className="badge badge-warning">Pending</span>
                    </div>
                    <div className="approval-details">
                      <div className="detail-row">
                        <span className="label">Student:</span>
                        <span className="value">{booking.studentName}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Registration No:</span>
                        <span className="value">{booking.studentId}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Date & Time:</span>
                        <span className="value">{booking.bookingDate} | {booking.startTime} - {booking.endTime}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Purpose:</span>
                        <span className="value">{booking.purpose}</span>
                      </div>
                    </div>
                    <div className="approval-actions">
                      <button 
                        className="btn btn-approve"
                        onClick={() => handleApprove(booking.id)}
                      >
                        ✓ Approve
                      </button>
                      <button 
                        className="btn btn-reject"
                        onClick={() => handleReject(booking.id)}
                      >
                        ✗ Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>✓ All bookings are approved!</p>
              </div>
            )}
          </div>

          {/* Approved Bookings */}
          <div className="approved-section">
            <h3>Recently Approved Bookings</h3>
            {bookings.filter(b => b.status === 'confirmed').length > 0 ? (
              <div className="approved-list">
                {bookings.filter(b => b.status === 'confirmed').slice(0, 5).map(booking => (
                  <div key={booking.id} className="approved-item">
                    <div className="approved-info">
                      <p className="equipment-name">{booking.equipmentName}</p>
                      <p className="student-name">Student: {booking.studentName}</p>
                      <p className="booking-time">{booking.bookingDate} | {booking.startTime} - {booking.endTime}</p>
                    </div>
                    <span className="badge badge-success">Approved</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="empty-state">No approved bookings</p>
            )}
          </div>
        </div>
      )}

      {/* Faults Tab */}
      {activeTab === "faults" && (
        <div className="tab-content">
          <div className="faults-section">
            <h3>Fault Reports</h3>
            <div className="fault-filters">
              <span className="filter-badge all">All ({allFaults.length})</span>
              <span className="filter-badge pending">Pending ({pendingFaults.length})</span>
              <span className="filter-badge under-repair">Under Repair ({allFaults.filter(f => f.status === 'under-repair').length})</span>
              <span className="filter-badge resolved">Resolved ({allFaults.filter(f => f.status === 'resolved').length})</span>
            </div>

            <div className="faults-grid">
              {allFaults.map(fault => (
                <div key={fault.id} className={`fault-card status-${fault.severity}`}>
                  <div className="fault-header">
                    <h4>{fault.equipmentName}</h4>
                    <div className="fault-badges">
                      <span className={`badge severity-${fault.severity}`}>
                        {fault.severity.toUpperCase()}
                      </span>
                      <span className={`badge status-badge status-${fault.status}`}>
                        {fault.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="fault-details">
                    <p><strong>Issue:</strong> {fault.issue}</p>
                    <p><strong>Description:</strong> {fault.description}</p>
                    <p><strong>Reported By:</strong> {fault.reportedBy}</p>
                    <p><strong>Date:</strong> {fault.reportDate}</p>
                  </div>
                  <div className="fault-actions">
                    <button className="btn btn-small">View Details</button>
                    <button className="btn btn-small">Assign Technician</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Equipment Status Tab */}
      {activeTab === "equipment" && (
        <div className="tab-content">
          <div className="equipment-status">
            <h3>Equipment Status Overview</h3>
            <div className="status-summary">
              <div className="status-item">
                <span className="status-dot available"></span>
                <span>Available: {STATS.availableEquipment}</span>
              </div>
              <div className="status-item">
                <span className="status-dot in-use"></span>
                <span>In Use: {STATS.inUseEquipment}</span>
              </div>
              <div className="status-item">
                <span className="status-dot maintenance"></span>
                <span>Maintenance: {STATS.maintenanceEquipment}</span>
              </div>
            </div>

            <div className="analytics-grid">
              <div className="analytics-card">
                <h4>Booking Statistics</h4>
                <p className="stat">Total Bookings: <strong>{STATS.totalBookings}</strong></p>
                <p className="stat">This Month: <strong>{STATS.thisMonthBookings}</strong></p>
                <p className="stat">Average Utilization: <strong>87%</strong></p>
              </div>
              <div className="analytics-card">
                <h4>Maintenance Metrics</h4>
                <p className="stat">Accuracy: <strong>{STATS.maintenanceAccuracy}</strong></p>
                <p className="stat">Avg Downtime: <strong>{STATS.averageDowntime}</strong></p>
                <p className="stat">Predictive Success: <strong>92%</strong></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FacultyDashboard;
