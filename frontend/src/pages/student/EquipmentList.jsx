import { useState } from "react";
import { Link } from "react-router-dom";
import "./Equipment.css";

const equipments = [
  { id: 1,  name: "Digital Oscilloscope",     category: "Electronics Lab",     status: "Available", location: "Block A · Room 101", lastMaint: "Jun 10, 2026", emoji: "📟" },
  { id: 2,  name: "Function Generator",        category: "Electronics Lab",     status: "Available", location: "Block A · Room 101", lastMaint: "Jun 8, 2026",  emoji: "📡" },
  { id: 3,  name: "Digital Multimeter",        category: "Electrical Lab",      status: "Booked",    location: "Block A · Room 102", lastMaint: "May 30, 2026", emoji: "🔌" },
  { id: 4,  name: "DC Power Supply",           category: "Electrical Lab",      status: "Available", location: "Block A · Room 102", lastMaint: "Jun 5, 2026",  emoji: "⚡" },
  { id: 5,  name: "Arduino Uno Kit",           category: "Embedded Systems Lab",status: "Available", location: "Block B · Room 201", lastMaint: "Jun 12, 2026", emoji: "🤖" },
  { id: 6,  name: "Raspberry Pi 4",            category: "IoT Lab",             status: "Booked",    location: "Block B · Room 202", lastMaint: "Jun 1, 2026",  emoji: "💻" },
  { id: 7,  name: "PLC Trainer Kit",           category: "Automation Lab",      status: "Available", location: "Block C · Room 301", lastMaint: "Jun 14, 2026", emoji: "🏭" },
  { id: 8,  name: "3D Printer",                category: "Manufacturing Lab",   status: "Available", location: "Block C · Room 302", lastMaint: "Jun 15, 2026", emoji: "🖨️" },
  { id: 9,  name: "CNC Machine Simulator",     category: "Mechanical Lab",      status: "Booked",    location: "Block D · Room 401", lastMaint: "May 28, 2026", emoji: "⚙️" },
  { id: 10, name: "Hydraulic Test Rig",        category: "Mechanical Lab",      status: "Available", location: "Block D · Room 401", lastMaint: "Jun 3, 2026",  emoji: "🔧" },
  { id: 11, name: "Network Analyzer",          category: "Communication Lab",   status: "Available", location: "Block E · Room 501", lastMaint: "Jun 18, 2026", emoji: "📶" },
  { id: 12, name: "Fiber Optic Trainer Kit",   category: "Communication Lab",   status: "Booked",    location: "Block E · Room 501", lastMaint: "Jun 2, 2026",  emoji: "🔦" },
];

const CATEGORIES = ["All", ...Array.from(new Set(equipments.map(e => e.category)))];
const STATUS_FILTERS = ["All", "Available", "Booked"];

export default function EquipmentList() {
  const [search, setSearch]     = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus]     = useState("All");

  const filtered = equipments.filter(e => {
    const matchSearch   = e.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || e.category === category;
    const matchStatus   = status === "All"   || e.status === status;
    return matchSearch && matchCategory && matchStatus;
  });

  const available = equipments.filter(e => e.status === "Available").length;
  const booked    = equipments.filter(e => e.status === "Booked").length;

  return (
    <div className="el-root">

      {/* ── Sidebar (reuse same sidebar pattern) ── */}
      <aside className="el-sidebar">
        <div className="el-brand">
          <span>⚗</span>
          <span className="el-brand-name">LabSync<em>AI</em></span>
        </div>
        <div className="el-user">
          <div className="el-avatar">KS</div>
          <div>
            <div className="el-user-name">Karthikeyan S</div>
            <div className="el-user-role">Student · IT Dept</div>
          </div>
        </div>
        <nav className="el-nav">
          <Link to="/student/dashboard" className="el-nav-item">◈ Dashboard</Link>
          <Link to="/student/equipment" className="el-nav-item el-nav-item--active">⊡ Equipment List</Link>
          <Link to="/student/book"      className="el-nav-item">◷ Book Equipment</Link>
          <Link to="/student/usage"     className="el-nav-item">◎ Usage History</Link>
          <Link to="/student/fault"     className="el-nav-item">⚠ Fault Reporting</Link>
          <Link to="/student/profile"   className="el-nav-item">◯ Profile</Link>
        </nav>
        <Link to="/logout" className="el-logout">↩ Logout</Link>
      </aside>

      {/* ── Main ── */}
      <main className="el-main">

        {/* Header */}
        <header className="el-topbar">
          <div>
            <p className="el-breadcrumb">Student Portal</p>
            <h1 className="el-title">Equipment List</h1>
          </div>
          <div className="el-topbar-right">
            <div className="el-stat-pill el-stat-pill--green">
              <span className="el-dot el-dot--green" />
              {available} Available
            </div>
            <div className="el-stat-pill el-stat-pill--red">
              <span className="el-dot el-dot--red" />
              {booked} Booked
            </div>
          </div>
        </header>

        {/* Filters */}
        <div className="el-filters">
          <div className="el-search-wrap">
            <span className="el-search-icon">🔍</span>
            <input
              className="el-search"
              type="text"
              placeholder="Search equipment..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button className="el-clear" onClick={() => setSearch("")}>✕</button>
            )}
          </div>

          <select
            className="el-select"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>

          <div className="el-status-tabs">
            {STATUS_FILTERS.map(s => (
              <button
                key={s}
                className={`el-status-tab ${status === s ? "el-status-tab--active" : ""}`}
                onClick={() => setStatus(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <p className="el-result-count">
          Showing <strong>{filtered.length}</strong> of {equipments.length} equipment
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="el-empty">
            <div className="el-empty-icon">🔍</div>
            <div className="el-empty-title">No equipment found</div>
            <div className="el-empty-sub">Try a different search or filter</div>
          </div>
        ) : (
          <div className="el-grid">
            {filtered.map(eq => (
              <div className="el-card" key={eq.id}>

                {/* Status ribbon */}
                <span className={`el-ribbon ${eq.status === "Available" ? "el-ribbon--green" : "el-ribbon--red"}`}>
                  {eq.status}
                </span>

                {/* Icon area */}
                <div className={`el-icon-area ${eq.status === "Available" ? "el-icon-area--blue" : "el-icon-area--gray"}`}>
                  <span className="el-emoji">{eq.emoji}</span>
                </div>

                {/* Info */}
                <div className="el-card-body">
                  <h3 className="el-card-name">{eq.name}</h3>
                  <p className="el-card-cat">
                    <span className="el-cat-dot" />
                    {eq.category}
                  </p>

                  <div className="el-card-meta">
                    <div className="el-meta-row">
                      <span className="el-meta-label">📍 Location</span>
                      <span className="el-meta-val">{eq.location}</span>
                    </div>
                    <div className="el-meta-row">
                      <span className="el-meta-label">🔧 Last Service</span>
                      <span className="el-meta-val">{eq.lastMaint}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="el-card-footer">
                  <Link to={`/student/equipment/${eq.id}`} className="el-btn-detail">
                    View Details
                  </Link>
                  {eq.status === "Available" ? (
                    <Link to="/student/book" className="el-btn-book">
                      Book Now →
                    </Link>
                  ) : (
                    <span className="el-btn-busy">Unavailable</span>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  );
}