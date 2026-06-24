import { useState } from "react";
import "./Student.css";

function FaultReport() {
  const [faultData, setFaultData] = useState({
    equipment: "",
    severity: "",
    location: "",
    description: ""
  });

  const [reports, setReports] = useState([
    {
      id: 1,
      equipment: "Digital Oscilloscope",
      severity: "High",
      status: "Open"
    },
    {
      id: 2,
      equipment: "Arduino Uno Kit",
      severity: "Medium",
      status: "In Progress"
    }
  ]);

  const handleChange = (e) => {
    setFaultData({
      ...faultData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReport = {
      id: reports.length + 1,
      equipment: faultData.equipment,
      severity: faultData.severity,
      status: "Open"
    };

    setReports([...reports, newReport]);

    alert("Fault Report Submitted Successfully!");

    setFaultData({
      equipment: "",
      severity: "",
      location: "",
      description: ""
    });
  };

  return (
    <div className="student-page">

      <div className="page-header">
        <h1>⚠ Equipment Fault Reporting</h1>
        <p>
          Report equipment issues to ensure
          timely maintenance and uninterrupted
          laboratory operations.
        </p>
      </div>

      <form
        className="student-form"
        onSubmit={handleSubmit}
      >
        <select
          name="equipment"
          value={faultData.equipment}
          onChange={handleChange}
          required
        >
          <option value="">
            Select Equipment
          </option>

          <option>
            Digital Oscilloscope
          </option>

          <option>
            Function Generator
          </option>

          <option>
            Arduino Uno Kit
          </option>

          <option>
            PLC Trainer Kit
          </option>

          <option>
            Digital Multimeter
          </option>

          <option>
            CNC Machine Trainer
          </option>

          <option>
            Robotics Arm Kit
          </option>

          <option>
            IoT Development Board
          </option>
        </select>

        <select
          name="severity"
          value={faultData.severity}
          onChange={handleChange}
          required
        >
          <option value="">
            Select Severity
          </option>

          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Critical</option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="Lab Location (Example: ECE Lab 2)"
          value={faultData.location}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Describe the fault in detail..."
          value={faultData.description}
          onChange={handleChange}
          rows="5"
          required
        />

        <input
          type="file"
          accept="image/*"
        />

        <button type="submit">
          Submit Fault Report
        </button>
      </form>

      <div className="fault-history">

        <h2>Recent Fault Reports</h2>

        <table className="history-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Equipment</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.equipment}</td>
                <td>{report.severity}</td>
                <td>
                  <span
                    className={`status ${report.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {report.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default FaultReport;