import { useState } from "react";
import StudentSidebar from "../src/components/StudentSidebar";
import "../Dashboard.css";
import "./UsageHistory.css";

const USAGE_DATA = [
  { id: 1, equipment: "Digital Oscilloscope", lab: "Electronics Lab",      hours: 4,  date: "Jun 12, 2026", status: "Completed", statusClass: "uh-done" },
  { id: 2, equipment: "Arduino Uno Kit",       lab: "Embedded Systems Lab", hours: 6,  date: "Jun 15, 2026", status: "Completed", statusClass: "uh-done" },
  { id: 3, equipment: "PLC Trainer Kit",       lab: "Automation Lab",       hours: 3,  date: "Jun 18, 2026", status: "Completed", statusClass: "uh-done" },
  { id: 4, equipment: "Function Generator",    lab: "Electronics Lab",      hours: 2,  date: "Jun 20, 2026", status: "Completed", statusClass: "uh-done" },
  { id: 5, equipment: "CNC Machine Simulator", lab: "Mechanical Lab",       hours: 5,  date: "Jun 24, 2026", status: "Active",    statusClass: "uh-active" },
  { id: 6, equipment: "Spectrum Analyser",     lab: "RF Lab",               hours: 0,  date: "Jun 25, 2026", status: "Upcoming", statusClass: "uh-upcoming" },
];

function UsageHistory() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = USAGE_DATA.filter((item) => {
    const matchSearch = item.equipment.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || item.status === filter;
    return matchSearch && matchFilter;
  });

  const totalHours   = USAGE_DATA.reduce((s, i) => s + i.hours, 0);
  const completed    = USAGE_DATA.filter((i) => i.status === "Completed").length;
  const activeCount  = USAGE_DATA.filter((i) => i.status === "Active").length;

  return (
    <div className="sd-root">
      <StudentSidebar />

      <main className="sd-main">
        {/* Topbar */}
        <header className="sd-topbar">
          <div>
            <p className="sd-topbar-breadcrumb">Student Portal</p>
            <h1 className="sd-topbar-title">Usage History</h1>
          </div>
          <div className="sd-topbar-right">
            <span className="uh-total-pill">📊 {totalHours} Total Hours</span>
          </div>
        </header>

        {/* KPI Row */}
        <section className="uh-kpi-row">
          <div className="uh-kpi uh-kpi--blue">
            <div className="uh-kpi-val">{USAGE_DATA.length}</div>
            <div className="uh-kpi-label">Total Sessions</div>
          </div>
          <div className="uh-kpi uh-kpi--green">
            <div className="uh-kpi-val">{totalHours}h</div>
            <div className="uh-kpi-label">Usage Hours</div>
          </div>
          <div className="uh-kpi uh-kpi--cyan">
            <div className="uh-kpi-val">{completed}</div>
            <div className="uh-kpi-label">Completed</div>
          </div>
          <div className="uh-kpi uh-kpi--amber">
            <div className="uh-kpi-val">89</div>
            <div className="uh-kpi-label">Appraisal Score</div>
          </div>
        </section>

        {/* Table Card */}
        <section className="uh-table-card">
          {/* Filters */}
          <div className="uh-filters">
            <input
              className="uh-search"
              type="text"
              placeholder="🔍  Search equipment..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="uh-filter-tabs">
              {["All", "Completed", "Active", "Upcoming"].map((f) => (
                <button
                  key={f}
                  className={`uh-tab ${filter === f ? "uh-tab--active" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="uh-table-wrap">
            <table className="uh-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Equipment</th>
                  <th>Lab</th>
                  <th>Usage Hours</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length > 0 ? (
                  filtered.map((item, idx) => (
                    <tr key={item.id}>
                      <td className="uh-td-muted">{idx + 1}</td>
                      <td className="uh-td-bold">{item.equipment}</td>
                      <td className="uh-td-muted">{item.lab}</td>
                      <td>{item.hours > 0 ? `${item.hours} hrs` : "—"}</td>
                      <td className="uh-td-muted">{item.date}</td>
                      <td>
                        <span className={`uh-status ${item.statusClass}`}>{item.status}</span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="uh-empty">No records found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default UsageHistory;