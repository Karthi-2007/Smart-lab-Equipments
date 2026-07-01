import { Link } from "react-router-dom";
import "../Dashboard.css";
import { useData } from "../../context/DataContext";
import React from "react";

function BookingManagement() {
  const { bookings, stats } = useData();

  return (
    <main className="dashboard">
      <header className="review-header">
        <div>
          <p className="review-eyebrow">Admin Portal</p>
          <h1>Booking Management</h1>
        </div>
        <Link to="/admin/dashboard" className="ghost-link">Back to Dashboard</Link>
      </header>

      <section className="data-card">
        <div className="data-card-header">
          <h2>All Booking Requests</h2>
          <span className="status-pill is-warning">{stats.pendingBookings} Pending</span>
        </div>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Student</th>
                <th>Equipment</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>BK-{booking.id}</td>
                  <td className="strong-cell">{booking.studentName}</td>
                  <td>{booking.equipmentName}</td>
                  <td>{booking.bookingDate}</td>
                  <td>
                    <span className={`status-pill ${booking.status === "Approved" || booking.status === "Completed" ? "is-success" : "is-warning"}`}>
                      {booking.status}
                    </span>
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

export default BookingManagement;
