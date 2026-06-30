import { Link } from "react-router-dom";
import "../Dashboard.css";

const equipment = [
  { id: "EQ-101", name: "Digital Oscilloscope", lab: "Electronics Lab", status: "Available", utilization: "82%" },
  { id: "EQ-117", name: "3D Printer", lab: "Manufacturing Lab", status: "Maintenance", utilization: "76%" },
  { id: "EQ-122", name: "CNC Machine Simulator", lab: "Mechanical Lab", status: "Booked", utilization: "69%" },
  { id: "EQ-130", name: "Network Analyzer", lab: "Communication Lab", status: "Available", utilization: "58%" },
  { id: "EQ-145", name: "PLC Trainer Kit", lab: "Automation Lab", status: "Available", utilization: "63%" },
];

function EquipmentManagement() {
  return (
    <main className="dashboard">
      <header className="review-header">
        <div>
          <p className="review-eyebrow">Admin Portal</p>
          <h1>Equipment Inventory</h1>
        </div>
        <Link to="/admin/dashboard" className="ghost-link">Back to Dashboard</Link>
      </header>

      <section className="data-card">
        <div className="data-card-header">
          <h2>Lab Equipment</h2>
          <button type="button" className="primary-action">Add Equipment</button>
        </div>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>Asset ID</th>
                <th>Equipment</th>
                <th>Lab</th>
                <th>Status</th>
                <th>Utilization</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {equipment.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td className="strong-cell">{item.name}</td>
                  <td>{item.lab}</td>
                  <td>
                    <span className={`status-pill ${item.status === "Available" ? "is-success" : item.status === "Booked" ? "is-info" : "is-danger"}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>{item.utilization}</td>
                  <td><button type="button" className="text-action">Update</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default EquipmentManagement;
