import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./AdminDashboard.css";
import { STATS, MOCK_EQUIPMENT, MOCK_BOOKINGS, MOCK_FAULTS } from "../../data/mockData";

function AdminDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Admin Dashboard 👨‍💼</h1>
          <p>System Management & Analytics</p>
        </div>
        <div className="admin-info-card">
          <p><strong>Administrator:</strong> {user?.name}</p>
          <p><strong>Department:</strong> {user?.dept}</p>
          <p><strong>ID:</strong> {user?.regNo}</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-icon">📊</div>
          <div className="metric-content">
            <h3>{STATS.totalEquipment}</h3>
            <p>Total Equipment</p>
            <span className="metric-label">6 devices</span>
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-icon">📅</div>
          <div className="metric-content">
            <h3>{STATS.totalBookings}</h3>
            <p>Total Bookings</p>
            <span className="metric-label">All time</span>
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-icon">⏳</div>
          <div className="metric-content">
            <h3>{STATS.pendingApprovals}</h3>
            <p>Pending Approvals</p>
            <span className="metric-label">Action needed</span>
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-icon">⚠️</div>
          <div className="metric-content">
            <h3>{STATS.faultsPending}</h3>
            <p>Faults to Review</p>
            <span className="metric-label">High priority</span>
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-icon">✅</div>
          <div className="metric-content">
            <h3>{STATS.maintenanceAccuracy}</h3>
            <p>Maintenance Accuracy</p>
            <span className="metric-label">Predictive AI</span>
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-icon">🛠</div>
          <div className="metric-content">
            <h3>{STATS.averageDowntime}</h3>
            <p>Avg Downtime</p>
            <span className="metric-label">Per incident</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="dashboard-tabs">
        <button
          className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          📈 Overview
        </button>
        <button
          className={`tab-btn ${activeTab === "equipment" ? "active" : ""}`}
          onClick={() => setActiveTab("equipment")}
        >
          🔧 Equipment
        </button>
        <button
          className={`tab-btn ${activeTab === "users" ? "active" : ""}`}
          onClick={() => setActiveTab("users")}
        >
          👥 Users
        </button>
        <button
          className={`tab-btn ${activeTab === "analytics" ? "active" : ""}`}
          onClick={() => setActiveTab("analytics")}
        >
          📊 Analytics
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="tab-content">
          <div className="overview-grid">
            {/* System Status */}
            <div className="card">
              <h3>🟢 System Status</h3>
              <div className="status-list">
                <div className="status-item">
                  <span className="status-label">Database</span>
                  <span className="status-indicator online">Online</span>
                </div>
                <div className="status-item">
                  <span className="status-label">API Server</span>
                  <span className="status-indicator online">Online</span>
                </div>
                <div className="status-item">
                  <span className="status-label">Email Service</span>
                  <span className="status-indicator online">Online</span>
                </div>
                <div className="status-item">
                  <span className="status-label">AI Engine</span>
                  <span className="status-indicator online">Online</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card">
              <h3>📊 Quick Stats</h3>
              <div className="stat-item">
                <span>Equipment Available:</span>
                <strong>{STATS.availableEquipment}/{STATS.totalEquipment}</strong>
              </div>
              <div className="stat-item">
                <span>This Month Bookings:</span>
                <strong>{STATS.thisMonthBookings}</strong>
              </div>
              <div className="stat-item">
                <span>Equipment Utilization:</span>
                <strong>87%</strong>
              </div>
              <div className="stat-item">
                <span>Active Users:</span>
                <strong>342</strong>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="card">
              <h3>📅 Recent Bookings</h3>
              <div className="booking-mini-list">
                {MOCK_BOOKINGS.slice(0, 3).map(booking => (
                  <div key={booking.id} className="mini-item">
                    <p className="equipment">{booking.equipmentName}</p>
                    <p className="student">{booking.studentName}</p>
                    <span className={`badge status-${booking.status}`}>
                      {booking.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Faults */}
            <div className="card">
              <h3>⚠️ Recent Faults</h3>
              <div className="fault-mini-list">
                {MOCK_FAULTS.slice(0, 3).map(fault => (
                  <div key={fault.id} className="mini-item">
                    <p className="equipment">{fault.equipmentName}</p>
                    <p className="issue">{fault.issue}</p>
                    <span className={`badge severity-${fault.severity}`}>
                      {fault.severity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Health */}
            <div className="card">
              <h3>💚 System Health</h3>
              <div className="health-bars">
                <div className="health-item">
                  <label>CPU Usage</label>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '45%'}}></div>
                  </div>
                  <span>45%</span>
                </div>
                <div className="health-item">
                  <label>Memory Usage</label>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '62%'}}></div>
                  </div>
                  <span>62%</span>
                </div>
                <div className="health-item">
                  <label>Storage</label>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '38%'}}></div>
                  </div>
                  <span>38%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Equipment Tab */}
      {activeTab === "equipment" && (
        <div className="tab-content">
          <div className="equipment-management">
            <div className="section-header">
              <h3>Equipment Inventory</h3>
              <button className="btn btn-primary">+ Add Equipment</button>
            </div>
            
            <div className="equipment-table">
              <table>
                <thead>
                  <tr>
                    <th>Equipment Name</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Location</th>
                    <th>Last Serviced</th>
                    <th>Next Maintenance</th>
                    <th>Bookings/Week</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_EQUIPMENT.map(eq => (
                    <tr key={eq.id}>
                      <td className="equipment-name">{eq.image} {eq.name}</td>
                      <td>{eq.category}</td>
                      <td>
                        <span className={`badge status-${eq.status}`}>
                          {eq.status.replace('-', ' ')}
                        </span>
                      </td>
                      <td>{eq.location}</td>
                      <td>{eq.lastServiced}</td>
                      <td>{eq.maintenanceDate}</td>
                      <td className="text-center">{eq.bookingsPerWeek}</td>
                      <td>
                        <button className="action-btn edit">✎</button>
                        <button className="action-btn delete">🗑</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === "users" && (
        <div className="tab-content">
          <div className="users-management">
            <div className="section-header">
              <h3>User Management</h3>
              <button className="btn btn-primary">+ Add User</button>
            </div>

            <div className="user-stats">
              <div className="user-stat-card">
                <h4>Students</h4>
                <p className="number">287</p>
                <span className="sub">Active users</span>
              </div>
              <div className="user-stat-card">
                <h4>Faculty</h4>
                <p className="number">42</p>
                <span className="sub">Approvers</span>
              </div>
              <div className="user-stat-card">
                <h4>Admins</h4>
                <p className="number">8</p>
                <span className="sub">System managers</span>
              </div>
            </div>

            <div className="users-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Join Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Karthikeyan S</td>
                    <td>student@lab.com</td>
                    <td><span className="badge role-student">Student</span></td>
                    <td>IT</td>
                    <td><span className="status-active">Active</span></td>
                    <td>2024-06-15</td>
                    <td>
                      <button className="action-btn edit">✎</button>
                      <button className="action-btn delete">🗑</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Dr. Priya R</td>
                    <td>faculty@lab.com</td>
                    <td><span className="badge role-faculty">Faculty</span></td>
                    <td>Electronics</td>
                    <td><span className="status-active">Active</span></td>
                    <td>2020-01-10</td>
                    <td>
                      <button className="action-btn edit">✎</button>
                      <button className="action-btn delete">🗑</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === "analytics" && (
        <div className="tab-content">
          <div className="analytics-section">
            <h3>System Analytics</h3>
            
            <div className="analytics-grid">
              <div className="analytics-card">
                <h4>📈 Booking Trends</h4>
                <div className="chart-placeholder">
                  <p>Chart: Bookings over last 30 days</p>
                  <p className="trend">↑ 23% increase</p>
                </div>
              </div>

              <div className="analytics-card">
                <h4>🎯 Equipment Utilization</h4>
                <div className="utilization-bars">
                  <div className="util-item">
                    <label>Oscilloscope</label>
                    <div className="util-bar">
                      <div className="util-fill" style={{width: '85%'}}></div>
                    </div>
                    <span>85%</span>
                  </div>
                  <div className="util-item">
                    <label>Function Gen</label>
                    <div className="util-bar">
                      <div className="util-fill" style={{width: '92%'}}></div>
                    </div>
                    <span>92%</span>
                  </div>
                  <div className="util-item">
                    <label>Power Supply</label>
                    <div className="util-bar">
                      <div className="util-fill" style={{width: '56%'}}></div>
                    </div>
                    <span>56%</span>
                  </div>
                </div>
              </div>

              <div className="analytics-card">
                <h4>🤖 AI Predictions</h4>
                <div className="prediction-list">
                  <div className="prediction">
                    <p>Power Supply needs maintenance</p>
                    <span className="confidence">92% confidence</span>
                  </div>
                  <div className="prediction">
                    <p>Peak booking time: 2-3 PM</p>
                    <span className="confidence">87% confidence</span>
                  </div>
                  <div className="prediction">
                    <p>Equipment failure risk low</p>
                    <span className="confidence">94% confidence</span>
                  </div>
                </div>
              </div>

              <div className="analytics-card">
                <h4>📊 Department Wise Usage</h4>
                <div className="dept-list">
                  <div className="dept-item">
                    <label>Information Technology</label>
                    <span className="count">342 bookings</span>
                  </div>
                  <div className="dept-item">
                    <label>Electronics</label>
                    <span className="count">289 bookings</span>
                  </div>
                  <div className="dept-item">
                    <label>Mechanical</label>
                    <span className="count">156 bookings</span>
                  </div>
                  <div className="dept-item">
                    <label>Civil</label>
                    <span className="count">98 bookings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
