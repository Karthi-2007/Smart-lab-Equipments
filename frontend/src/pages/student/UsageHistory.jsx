import React, { useState } from "react";
import "./UsageHistory.css";
import { MOCK_BOOKINGS } from "../../data/mockData";
import { useAuth } from "../../context/AuthContext";

function UsageHistory() {
  const { user } = useAuth();
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterMonth, setFilterMonth] = useState("all");

  // Filter bookings for current student
  const studentBookings = MOCK_BOOKINGS.filter(b => b.studentName === user?.name)
    .sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate));

  const statuses = ["all", "pending", "confirmed", "completed"];
  const months = ["all", "June", "May", "April", "March"];

  // Apply filters
  const filteredBookings = studentBookings.filter(booking => {
    const matchesStatus = filterStatus === "all" || booking.status === filterStatus;
    const bookingMonth = new Date(booking.bookingDate).toLocaleString('default', { month: 'long' });
    const matchesMonth = filterMonth === "all" || bookingMonth === filterMonth;
    return matchesStatus && matchesMonth;
  });

  const getStatusStats = () => {
    return {
      total: studentBookings.length,
      completed: studentBookings.filter(b => b.status === "completed").length,
      confirmed: studentBookings.filter(b => b.status === "confirmed").length,
      pending: studentBookings.filter(b => b.status === "pending").length,
    };
  };

  const stats = getStatusStats();

  return (
    <div className="usage-history-page">
      <div className="page-header">
        <h1>📊 Equipment Usage History</h1>
        <p>View all your equipment bookings and usage records</p>
      </div>

      {/* Statistics */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <h3>{stats.total}</h3>
            <p>Total Bookings</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>{stats.completed}</h3>
            <p>Completed</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✓</div>
          <div className="stat-content">
            <h3>{stats.confirmed}</h3>
            <p>Confirmed</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <h3>{stats.pending}</h3>
            <p>Pending</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filter-group">
          <label htmlFor="status">Filter by Status:</label>
          <select
            id="status"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="month">Filter by Month:</label>
          <select
            id="month"
            value={filterMonth}
            onChange={(e) => setFilterMonth(e.target.value)}
          >
            {months.map(month => (
              <option key={month} value={month}>
                {month.charAt(0).toUpperCase() + month.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* History Table */}
      {filteredBookings.length > 0 ? (
        <div className="history-section">
          <div className="results-info">
            <p>Showing {filteredBookings.length} of {studentBookings.length} bookings</p>
          </div>

          <div className="history-table">
            <table>
              <thead>
                <tr>
                  <th>Equipment</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Duration</th>
                  <th>Purpose</th>
                  <th>Status</th>
                  <th>Approved By</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map(booking => {
                  const start = new Date(`2026-01-01 ${booking.startTime}`);
                  const end = new Date(`2026-01-01 ${booking.endTime}`);
                  const duration = Math.round((end - start) / (1000 * 60));
                  
                  return (
                    <tr key={booking.id} className={`status-${booking.status}`}>
                      <td className="equipment-name">📦 {booking.equipmentName}</td>
                      <td>{booking.bookingDate}</td>
                      <td>{booking.startTime} - {booking.endTime}</td>
                      <td>{duration} min</td>
                      <td className="purpose">{booking.purpose}</td>
                      <td>
                        <span className={`badge status-${booking.status}`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </td>
                      <td>{booking.approvedBy || "Pending"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="no-results">
          <p>📭 No bookings found with the selected filters.</p>
          <p>Start booking equipment to see your usage history here.</p>
        </div>
      )}

      {/* Usage Tips */}
      <div className="tips-section">
        <h2>💡 Usage Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>🎯 Plan Ahead</h4>
            <p>Book equipment in advance to ensure availability for your experiments.</p>
          </div>
          <div className="tip-card">
            <h4>⏰ Optimize Time</h4>
            <p>Use available time slots efficiently. Unused bookings may be deallocated.</p>
          </div>
          <div className="tip-card">
            <h4>🔍 Track Usage</h4>
            <p>Monitor your usage patterns to improve resource planning.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsageHistory;
