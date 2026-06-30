import { useState } from "react";
import { Link } from "react-router-dom";
import "../Dashboard.css";

const initialRequests = [
  { id: "REQ-101", student: "Karthikeyan S", equipment: "Digital Oscilloscope", date: "Jul 01, 2026", status: "Pending" },
  { id: "REQ-102", student: "Hariharan A", equipment: "Arduino Uno Kit", date: "Jul 01, 2026", status: "Pending" },
  { id: "REQ-103", student: "Premnath P", equipment: "3D Printer", date: "Jul 02, 2026", status: "Pending" },
];

function BookingApprovals() {
  const [requests, setRequests] = useState(initialRequests);

  const updateStatus = (id, status) => {
    setRequests((current) =>
      current.map((request) => request.id === id ? { ...request, status } : request)
    );
  };

  return (
    <main className="dashboard">
      <header className="review-header">
        <div>
          <p className="review-eyebrow">Faculty Portal</p>
          <h1>Booking Approvals</h1>
        </div>
        <Link to="/faculty/dashboard" className="ghost-link">Back to Dashboard</Link>
      </header>

      <section className="data-card">
        <div className="data-card-header">
          <h2>Student Requests</h2>
          <span className="status-pill is-warning">
            {requests.filter((request) => request.status === "Pending").length} Pending
          </span>
        </div>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Student</th>
                <th>Equipment</th>
                <th>Date</th>
                <th>Status</th>
                <th>Decision</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id}>
                  <td>{request.id}</td>
                  <td className="strong-cell">{request.student}</td>
                  <td>{request.equipment}</td>
                  <td>{request.date}</td>
                  <td>
                    <span className={`status-pill ${request.status === "Approved" ? "is-success" : request.status === "Rejected" ? "is-danger" : "is-warning"}`}>
                      {request.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-row">
                      <button type="button" className="approve-action" onClick={() => updateStatus(request.id, "Approved")}>
                        Approve
                      </button>
                      <button type="button" className="reject-action" onClick={() => updateStatus(request.id, "Rejected")}>
                        Reject
                      </button>
                    </div>
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

export default BookingApprovals;
