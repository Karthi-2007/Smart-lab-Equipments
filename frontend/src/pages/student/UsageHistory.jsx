import { useState } from "react";
import "./Student.css";

function UsageHistory() {
  const [search, setSearch] = useState("");

  const usageData = [
    {
      id: 1,
      equipment: "Digital Oscilloscope",
      hours: 4,
      date: "12-06-2026",
      status: "Completed",
    },
    {
      id: 2,
      equipment: "Arduino Uno Kit",
      hours: 6,
      date: "15-06-2026",
      status: "Completed",
    },
    {
      id: 3,
      equipment: "PLC Trainer Kit",
      hours: 3,
      date: "18-06-2026",
      status: "Completed",
    },
    {
      id: 4,
      equipment: "Function Generator",
      hours: 2,
      date: "20-06-2026",
      status: "Completed",
    },
  ];

  const filteredData = usageData.filter((item) =>
    item.equipment.toLowerCase().includes(search.toLowerCase())
  );

  const totalHours = usageData.reduce(
    (sum, item) => sum + item.hours,
    0
  );

  return (
    <div className="student-page">

      <div className="page-header">
        <h1>Usage History</h1>
        <p>Track your laboratory equipment usage records.</p>
      </div>

      <div className="usage-stats">

        <div className="stat-card">
          <h3>Total Usage</h3>
          <p>{totalHours} Hrs</p>
        </div>

        <div className="stat-card">
          <h3>Equipment Used</h3>
          <p>{usageData.length}</p>
        </div>

        <div className="stat-card">
          <h3>Appraisal Score</h3>
          <p>89/100</p>
        </div>

      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search Equipment..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-container">

        <table className="history-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Equipment</th>
              <th>Usage Hours</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.equipment}</td>
                <td>{item.hours} Hrs</td>
                <td>{item.date}</td>

                <td>
                  <span className="status completed">
                    {item.status}
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

export default UsageHistory;