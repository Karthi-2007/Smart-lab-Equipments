import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./StudentDashboard.css";
import { MOCK_BOOKINGS, MOCK_EQUIPMENT, STATS } from "../../data/mockData";

function StudentDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  // Filter bookings for current student
  const studentBookings = MOCK_BOOKINGS.filter(b => b.studentName === user?.name);
  const confirmedBookings = studentBookings.filter(b => b.status === "confirmed");
  const pendingBookings = studentBookings.filter(b => b.status === "pending");
  const completedBookings = studentBookings.filter(b => b.status === "completed");

  return (
    <div className="student-dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Welcome, {user?.name}! 👋</h1>
          <p>Smart Lab Equipment Booking System</p>
        </div>
        <div className="user-info-card">
          <p><strong>Registration No:</strong> {user?.regNo}</p>
          <p><strong>Department:</strong> {user?.dept}</p>
          <p><strong>Year:</strong> {user?.year}</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-content">
            <h3>{confirmedBookings.length}</h3>
            <p>Active Bookings</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <h3>{pendingBookings.length}</h3>
            <p>Pending Approval</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>{completedBookings.length}</h3>
            <p>Completed</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <h3>{studentBookings.length}</h3>
            <p>Total Bookings</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="dashboard-tabs">
        <button
          className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          📊 Overview
        </button>
        <button
          className={`tab-btn ${activeTab === "bookings" ? "active" : ""}`}
          onClick={() => setActiveTab("bookings")}
        >
          📅 My Bookings
        </button>
        <button
          className={`tab-btn ${activeTab === "equipment" ? "active" : ""}`}
          onClick={() => setActiveTab("equipment")}
        >
          🔧 Available Equipment
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="tab-content">
          <div className="overview-grid">
            {/* Upcoming Bookings */}
            <div className="card">
              <h3>📅 Upcoming Bookings</h3>
              {confirmedBookings.length > 0 ? (
                <div className="booking-list">
                  {confirmedBookings.map(booking => (
                    <div key={booking.id} className="booking-item">
                      <div className="booking-time">
                        <strong>{booking.bookingDate}</strong>
                        <p>{booking.startTime} - {booking.endTime}</p>
                      </div>
                      <div className="booking-details">
                        <p className="equipment-name">{booking.equipmentName}</p>
                        <p className="purpose">Purpose: {booking.purpose}</p>
                      </div>
                      <span className="badge badge-success">Confirmed</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="empty-state">No upcoming bookings. <a href="/student/book">Book equipment</a></p>
              )}
            </div>

            {/* Pending Approvals */}
            <div className="card">
              <h3>⏳ Pending Approvals</h3>
              {pendingBookings.length > 0 ? (
                <div className="booking-list">
                  {pendingBookings.map(booking => (
                    <div key={booking.id} className="booking-item pending">
                      <div className="booking-time">
                        <strong>{booking.bookingDate}</strong>
                        <p>{booking.startTime} - {booking.endTime}</p>
                      </div>
                      <div className="booking-details">
                        <p className="equipment-name">{booking.equipmentName}</p>
                        <p className="purpose">Awaiting approval...</p>
                      </div>
                      <span className="badge badge-warning">Pending</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="empty-state">All bookings approved!</p>
              )}
            </div>

            {/* Equipment Status */}
            <div className="card">
              <h3>🟢 Equipment Availability</h3>
              <div className="availability-stats">
                <div className="availability-item">
                  <span className="dot available"></span>
                  <span>Available: 4</span>
                </div>
                <div className="availability-item">
                  <span className="dot in-use"></span>
                  <span>In Use: 1</span>
                </div>
                <div className="availability-item">
                  <span className="dot maintenance"></span>
                  <span>Maintenance: 1</span>
                </div>
              </div>
              <a href="/student/equipment" className="view-link">View all equipment →</a>
            </div>

            {/* Quick Actions */}
            <div className="card">
              <h3>⚡ Quick Actions</h3>
              <div className="action-buttons">
                <a href="/student/book" className="btn btn-primary">Book Equipment</a>
                <a href="/student/usage" className="btn btn-secondary">Usage History</a>
                <a href="/student/fault" className="btn btn-danger">Report Fault</a>
                <a href="/student/profile" className="btn btn-info">My Profile</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bookings Tab */}
      {activeTab === "bookings" && (
        <div className="tab-content">
          <div className="bookings-section">
            <h3>All Your Bookings</h3>
            {studentBookings.length > 0 ? (
              <div className="bookings-table">
                <table>
                  <thead>
                    <tr>
                      <th>Equipment</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Purpose</th>
                      <th>Status</th>
                      <th>Approved By</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentBookings.map(booking => (
                      <tr key={booking.id}>
                        <td>{booking.equipmentName}</td>
                        <td>{booking.bookingDate}</td>
                        <td>{booking.startTime} - {booking.endTime}</td>
                        <td>{booking.purpose}</td>
                        <td>
                          <span className={`badge badge-${booking.status === 'completed' ? 'success' : booking.status === 'confirmed' ? 'info' : 'warning'}`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </td>
                        <td>{booking.approvedBy || 'Pending'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="empty-state">No bookings yet.</p>
            )}
          </div>
        </div>
      )}

      {/* Equipment Tab */}
      {activeTab === "equipment" && (
        <div className="tab-content">
          <div className="equipment-grid">
            {MOCK_EQUIPMENT.map(equipment => (
              <div key={equipment.id} className="equipment-card">
                <div className="equipment-header">
                  <span className="equipment-icon">{equipment.image}</span>
                  <span className={`status-badge status-${equipment.status}`}>
                    {equipment.status.charAt(0).toUpperCase() + equipment.status.slice(1)}
                  </span>
                </div>
                <h4>{equipment.name}</h4>
                <p className="category">{equipment.category}</p>
                <p className="specs">{equipment.specifications}</p>
                <p className="location">📍 {equipment.location}</p>
                <div className="card-footer">
                  {equipment.status === 'available' ? (
                    <a href="/student/book" className="btn btn-sm btn-primary">Book Now</a>
                  ) : (
                    <button className="btn btn-sm btn-disabled" disabled>
                      Not Available
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;
