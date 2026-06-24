import { useState } from "react";
import { Link } from "react-router-dom";
import "./BookEquipment.css";

const EQUIPMENTS = [
  { name: "Digital Oscilloscope",    lab: "Electronics Lab",      emoji: "📟", slots: ["Morning", "Full Day"] },
  { name: "Function Generator",      lab: "Electronics Lab",      emoji: "📡", slots: ["Morning", "Afternoon", "Full Day"] },
  { name: "Digital Multimeter",      lab: "Electrical Lab",       emoji: "🔌", slots: [] },
  { name: "DC Power Supply",         lab: "Electrical Lab",       emoji: "⚡", slots: ["Afternoon", "Full Day"] },
  { name: "Arduino Uno Kit",         lab: "Embedded Systems Lab", emoji: "🤖", slots: ["Morning", "Afternoon", "Full Day"] },
  { name: "Raspberry Pi 4",          lab: "IoT Lab",              emoji: "💻", slots: [] },
  { name: "PLC Trainer Kit",         lab: "Automation Lab",       emoji: "🏭", slots: ["Morning", "Full Day"] },
  { name: "3D Printer",              lab: "Manufacturing Lab",    emoji: "🖨️", slots: ["Afternoon"] },
  { name: "CNC Machine Simulator",   lab: "Mechanical Lab",       emoji: "⚙️", slots: [] },
  { name: "Hydraulic Test Rig",      lab: "Mechanical Lab",       emoji: "🔧", slots: ["Morning", "Afternoon", "Full Day"] },
  { name: "Network Analyzer",        lab: "Communication Lab",    emoji: "📶", slots: ["Morning", "Afternoon", "Full Day"] },
  { name: "Fiber Optic Trainer Kit", lab: "Communication Lab",    emoji: "🔦", slots: [] },
];

const ALL_SESSIONS = ["Morning (9 AM – 12 PM)", "Afternoon (1 PM – 4 PM)", "Full Day (9 AM – 5 PM)"];

const SESSION_KEY = { "Morning (9 AM – 12 PM)": "Morning", "Afternoon (1 PM – 4 PM)": "Afternoon", "Full Day (9 AM – 5 PM)": "Full Day" };

const TODAY = new Date().toISOString().split("T")[0];

const EMPTY = { equipment: "", lab: "", bookingDate: "", returnDate: "", session: "", purpose: "" };

export default function BookEquipment() {
  const [form, setForm]         = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors]     = useState({});

  const selectedEquip = EQUIPMENTS.find(e => e.name === form.equipment);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors(prev => ({ ...prev, [name]: "" }));

    if (name === "equipment") {
      const eq = EQUIPMENTS.find(e => e.name === value);
      setForm(prev => ({ ...prev, equipment: value, lab: eq?.lab || "", session: "" }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const e = {};
    if (!form.equipment)    e.equipment    = "Please select equipment.";
    if (!form.lab)          e.lab          = "Please select a laboratory.";
    if (!form.bookingDate)  e.bookingDate  = "Please pick a booking date.";
    if (!form.returnDate)   e.returnDate   = "Please pick a return date.";
    if (form.bookingDate && form.returnDate && form.returnDate < form.bookingDate)
                            e.returnDate   = "Return date must be after booking date.";
    if (!form.session)      e.session      = "Please select a session.";
    if (!form.purpose.trim()) e.purpose    = "Please describe the purpose.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const handleReset = () => { setForm(EMPTY); setErrors({}); setSubmitted(false); };

  const slotKey = form.session ? SESSION_KEY[form.session] : null;
  const isSlotAvailable = selectedEquip && slotKey
    ? selectedEquip.slots.includes(slotKey)
    : null;

  if (submitted) {
    return (
      <div className="bk-root">
        <Sidebar />
        <main className="bk-main">
          <div className="bk-success-wrap">
            <div className="bk-success-card">
              <div className="bk-success-icon">✅</div>
              <h2 className="bk-success-title">Booking Request Submitted!</h2>
              <p className="bk-success-sub">Your request has been sent to the faculty for approval. You'll be notified once approved.</p>
              <div className="bk-success-summary">
                <div className="bk-sum-row"><span>Equipment</span><strong>{form.equipment}</strong></div>
                <div className="bk-sum-row"><span>Laboratory</span><strong>{form.lab}</strong></div>
                <div className="bk-sum-row"><span>Date</span><strong>{form.bookingDate} → {form.returnDate}</strong></div>
                <div className="bk-sum-row"><span>Session</span><strong>{form.session}</strong></div>
                <div className="bk-sum-row"><span>Purpose</span><strong>{form.purpose}</strong></div>
              </div>
              <div className="bk-success-actions">
                <button className="bk-btn-primary" onClick={handleReset}>Book Another</button>
                <Link to="/student" className="bk-btn-ghost">Go to Dashboard</Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bk-root">
      <Sidebar />
      <main className="bk-main">

        {/* Header */}
        <header className="bk-topbar">
          <div>
            <p className="bk-breadcrumb">Student Portal</p>
            <h1 className="bk-title">Book Equipment</h1>
          </div>
          <Link to="/student/equipment" className="bk-btn-ghost">← Back to Equipment</Link>
        </header>

        <div className="bk-layout">

          {/* ── Left: Form ── */}
          <div className="bk-form-card">
            <div className="bk-form-header">
              <span className="bk-form-icon">📋</span>
              <div>
                <div className="bk-form-title">Booking Details</div>
                <div className="bk-form-sub">Fill all fields to submit your request</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate>

              {/* Equipment */}
              <div className="bk-field">
                <label className="bk-label">Equipment <span className="bk-req">*</span></label>
                <select name="equipment" value={form.equipment} onChange={handleChange} className={`bk-select ${errors.equipment ? "bk-input-error" : ""}`}>
                  <option value="">Select Equipment</option>
                  {EQUIPMENTS.map(eq => (
                    <option key={eq.name} value={eq.name}>
                      {eq.emoji} {eq.name} {eq.slots.length === 0 ? "— Booked" : ""}
                    </option>
                  ))}
                </select>
                {errors.equipment && <p className="bk-error">{errors.equipment}</p>}
              </div>

              {/* Laboratory */}
              <div className="bk-field">
                <label className="bk-label">Laboratory <span className="bk-req">*</span></label>
                <input
                  name="lab"
                  value={form.lab}
                  readOnly
                  className="bk-input bk-input-readonly"
                  placeholder="Auto-filled when you pick equipment"
                />
                {errors.lab && <p className="bk-error">{errors.lab}</p>}
              </div>

              {/* Dates */}
              <div className="bk-row">
                <div className="bk-field">
                  <label className="bk-label">Booking Date <span className="bk-req">*</span></label>
                  <input type="date" name="bookingDate" value={form.bookingDate} onChange={handleChange} min={TODAY} className={`bk-input ${errors.bookingDate ? "bk-input-error" : ""}`} />
                  {errors.bookingDate && <p className="bk-error">{errors.bookingDate}</p>}
                </div>
                <div className="bk-field">
                  <label className="bk-label">Return Date <span className="bk-req">*</span></label>
                  <input type="date" name="returnDate" value={form.returnDate} onChange={handleChange} min={form.bookingDate || TODAY} className={`bk-input ${errors.returnDate ? "bk-input-error" : ""}`} />
                  {errors.returnDate && <p className="bk-error">{errors.returnDate}</p>}
                </div>
              </div>

              {/* Session */}
              <div className="bk-field">
                <label className="bk-label">Session <span className="bk-req">*</span></label>
                <div className="bk-session-grid">
                  {ALL_SESSIONS.map(s => {
                    const key = SESSION_KEY[s];
                    const avail = selectedEquip ? selectedEquip.slots.includes(key) : true;
                    return (
                      <button
                        type="button"
                        key={s}
                        disabled={!avail}
                        onClick={() => { if (avail) { setForm(p => ({ ...p, session: s })); setErrors(p => ({ ...p, session: "" })); }}}
                        className={`bk-session-btn
                          ${form.session === s ? "bk-session-btn--active" : ""}
                          ${!avail ? "bk-session-btn--disabled" : ""}
                        `}
                      >
                        <span className="bk-session-icon">{key === "Morning" ? "🌅" : key === "Afternoon" ? "☀️" : "🗓"}</span>
                        <span className="bk-session-label">{s}</span>
                        {!avail && <span className="bk-session-badge">Booked</span>}
                        {avail && form.session === s && <span className="bk-session-badge bk-session-badge--sel">Selected</span>}
                      </button>
                    );
                  })}
                </div>
                {errors.session && <p className="bk-error">{errors.session}</p>}
              </div>

              {/* Purpose */}
              <div className="bk-field">
                <label className="bk-label">Purpose of Usage <span className="bk-req">*</span></label>
                <textarea
                  name="purpose"
                  value={form.purpose}
                  onChange={handleChange}
                  placeholder="Describe your experiment, project, or reason for booking..."
                  rows={4}
                  className={`bk-textarea ${errors.purpose ? "bk-input-error" : ""}`}
                />
                <div className="bk-char-count">{form.purpose.length} characters</div>
                {errors.purpose && <p className="bk-error">{errors.purpose}</p>}
              </div>

              <button type="submit" className="bk-btn-submit">
                📨 Submit Booking Request
              </button>

            </form>
          </div>

          {/* ── Right: Info Panel ── */}
          <div className="bk-side-panel">

            {/* Equipment preview */}
            <div className="bk-info-card">
              <div className="bk-info-title">Equipment Preview</div>
              {selectedEquip ? (
                <>
                  <div className="bk-preview-icon">{selectedEquip.emoji}</div>
                  <div className="bk-preview-name">{selectedEquip.name}</div>
                  <div className="bk-preview-lab">{selectedEquip.lab}</div>
                  <div className={`bk-preview-status ${selectedEquip.slots.length > 0 ? "bk-preview-status--green" : "bk-preview-status--red"}`}>
                    {selectedEquip.slots.length > 0 ? "✅ Slots Available" : "❌ Fully Booked Today"}
                  </div>
                </>
              ) : (
                <div className="bk-preview-empty">
                  <div style={{ fontSize: "2rem", marginBottom: "8px" }}>⊡</div>
                  <div style={{ fontSize: "0.8rem", color: "#94A3B8" }}>Select equipment to see details</div>
                </div>
              )}
            </div>

            {/* Slot availability */}
            {selectedEquip && (
              <div className="bk-info-card">
                <div className="bk-info-title">Slot Availability</div>
                <div className="bk-slots">
                  {ALL_SESSIONS.map(s => {
                    const key = SESSION_KEY[s];
                    const avail = selectedEquip.slots.includes(key);
                    return (
                      <div key={s} className={`bk-slot ${avail ? "bk-slot--green" : "bk-slot--red"}`}>
                        <span>{key === "Morning" ? "🌅" : key === "Afternoon" ? "☀️" : "🗓"} {key}</span>
                        <span className="bk-slot-badge">{avail ? "Free" : "Booked"}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Rules */}
            <div className="bk-info-card bk-rules-card">
              <div className="bk-info-title">📌 Booking Rules</div>
              <ul className="bk-rules">
                <li>Book at least 24 hours in advance.</li>
                <li>Return equipment by session end time.</li>
                <li>Report any damage immediately via Fault Report.</li>
                <li>Repeated no-shows reduce your Appraisal Score.</li>
                <li>Faculty approval is required before use.</li>
              </ul>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="bk-sidebar">
      <div className="bk-brand">
        <span>⚗</span>
        <span className="bk-brand-name">LabSync<em>AI</em></span>
      </div>
      <div className="bk-user">
        <div className="bk-avatar">KS</div>
        <div>
          <div className="bk-user-name">Karthikeyan S</div>
          <div className="bk-user-role">Student · IT Dept</div>
        </div>
      </div>
      <nav className="bk-nav">
        <Link to="/student/dashboard" className="bk-nav-item">◈ Dashboard</Link>
        <Link to="/student/equipment" className="bk-nav-item">⊡ Equipment List</Link>
        <Link to="/student/book"      className="bk-nav-item bk-nav-item--active">◷ Book Equipment</Link>
        <Link to="/student/usage"     className="bk-nav-item">◎ Usage History</Link>
        <Link to="/student/fault"     className="bk-nav-item">⚠ Fault Reporting</Link>
        <Link to="/student/profile"   className="bk-nav-item">◯ Profile</Link>
      </nav>
      <Link to="/logout" className="bk-logout">↩ Logout</Link>
    </aside>
  );
}