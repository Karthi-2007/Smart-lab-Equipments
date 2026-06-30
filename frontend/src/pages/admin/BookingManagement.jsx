import { Link } from "react-router-dom";
import "../Dashboard.css";

const bookings = [
  { id: "BK-2401", student: "Karthikeyan S", equipment: "Digital Oscilloscope", date: "Jul 01, 2026", status: "Approved" },
  { id: "BK-2402", student: "Hariharan A", equipment: "Arduino Uno Kit", date: "Jul 01, 2026", status: "Pending" },
  { id: "BK-2403", student: "Premnath P", equipment: "3D Printer", date: "Jul 02, 2026", status: "Pending" },
  { id: "BK-2404", student: "Nivetha R", equipment: "Network Analyzer", date: "Jul 02, 2026", status: "Completed" },
];

function BookingManagement() {
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
          <span className="status-pill is-warning">2 Pending</span>
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
                  <td>{booking.id}</td>
                  <td className="strong-cell">{booking.student}</td>
                  <td>{booking.equipment}</td>
                  <td>{booking.date}</td>
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
