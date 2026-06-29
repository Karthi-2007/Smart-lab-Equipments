import { useState } from "react";
import StudentSidebar from "../student/StudentSidebar";
import "../Dashboard.css";
import "./FaultReport.css";

const EQUIPMENT_LIST = [
  "Digital Oscilloscope",
  "Function Generator",
  "Digital Multimeter",
  "DC Power Supply",
  "Arduino Uno Kit",
  "Raspberry Pi 4",
  "PLC Trainer Kit",
  "3D Printer",
  "CNC Machine Simulator",
  "Hydraulic Test Rig",
  "Network Analyzer",
  "Fiber Optic Trainer Kit",
];

const PAST_REPORTS = [
  { id: 1, equipment: "Digital Oscilloscope", severity: "Medium", date: "Jun 18, 2026", status: "Resolved",    statusClass: "fr-resolved" },
  { id: 2, equipment: "Arduino Uno Kit",       severity: "Low",    date: "Jun 20, 2026", status: "In Progress", statusClass: "fr-progress" },
  { id: 3, equipment: "3D Printer",            severity: "High",   date: "Jun 22, 2026", status: "Open",        statusClass: "fr-open" },
];

const SEVERITY_COLORS = {
  Low:      "fr-sev-low",
  Medium:   "fr-sev-medium",
  High:     "fr-sev-high",
  Critical: "fr-sev-critical",
};

const EMPTY = { equipment: "", severity: "", description: "" };

function FaultReport() {
  const [form, setForm]         = useState(EMPTY);
  const [errors, setErrors]     = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setErrors((p) => ({ ...p, [e.target.name]: "" }));
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const e = {};
    if (!form.equipment)          e.equipment    = "Please select equipment.";
    if (!form.severity)           e.severity     = "Please select severity.";
    if (!form.description.trim()) e.description  = "Please describe the issue.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const handleReset = () => { setForm(EMPTY); setErrors({}); setSubmitted(false); };

  return (
    <div className="sd-root">
      <StudentSidebar />

      <main className="sd-main">
        {/* Topbar */}
        <header className="sd-topbar">
          <div>
            <p className="sd-topbar-breadcrumb">Student Portal</p>
            <h1 className="sd-topbar-title">Fault Report</h1>
          </div>
          <div className="sd-topbar-right">
            <span className="fr-badge-count">{PAST_REPORTS.length} Reports Filed</span>
          </div>
        </header>

        {/* Success State */}
        {submitted ? (
          <div className="fr-success-wrap">
            <div className="fr-success-card">
              <div className="fr-success-icon">✅</div>
              <h2>Report Submitted!</h2>
              <p>Your fault report for <strong>{form.equipment}</strong> has been filed.</p>
              <p className="fr-success-sub">The maintenance team will review it shortly.</p>
              <div className="fr-success-detail">
                <span className={`fr-sev-badge ${SEVERITY_COLORS[form.severity]}`}>{form.severity} Severity</span>
              </div>
              <button className="fr-btn-primary" onClick={handleReset}>
                Submit Another Report
              </button>
            </div>
          </div>
        ) : (
          <div className="fr-layout">
            {/* Form */}
            <section className="fr-form-card">
              <h2 className="fr-section-title">Report Equipment Issue</h2>
              <p className="fr-section-sub">Fill in the details below and our team will respond promptly.</p>

              <form onSubmit={handleSubmit} className="fr-form">
                <div className="fr-field">
                  <label>Equipment</label>
                  <select name="equipment" value={form.equipment} onChange={handleChange}>
                    <option value="">— Select Equipment —</option>
                    {EQUIPMENT_LIST.map((eq) => (
                      <option key={eq}>{eq}</option>
                    ))}
                  </select>
                  {errors.equipment && <span className="fr-err">{errors.equipment}</span>}
                </div>

                <div className="fr-field">
                  <label>Severity Level</label>
                  <div className="fr-sev-grid">
                    {["Low", "Medium", "High", "Critical"].map((sev) => (
                      <label
                        key={sev}
                        className={`fr-sev-option ${form.severity === sev ? "fr-sev-selected" : ""} ${SEVERITY_COLORS[sev]}-border`}
                      >
                        <input
                          type="radio"
                          name="severity"
                          value={sev}
                          checked={form.severity === sev}
                          onChange={handleChange}
                          style={{ display: "none" }}
                        />
                        <span className={`fr-sev-dot ${SEVERITY_COLORS[sev]}`} />
                        {sev}
                      </label>
                    ))}
                  </div>
                  {errors.severity && <span className="fr-err">{errors.severity}</span>}
                </div>

                <div className="fr-field">
                  <label>Issue Description</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Describe the problem in detail — what happened, when it started, any error messages..."
                    rows={5}
                  />
                  {errors.description && <span className="fr-err">{errors.description}</span>}
                </div>

                <button type="submit" className="fr-btn-primary">
                  🚨 Submit Fault Report
                </button>
              </form>
            </section>

            {/* Past Reports */}
            <section className="fr-history-card">
              <h2 className="fr-section-title">My Past Reports</h2>
              <div className="fr-report-list">
                {PAST_REPORTS.map((r) => (
                  <div className="fr-report-item" key={r.id}>
                    <div className="fr-report-left">
                      <div className="fr-report-name">{r.equipment}</div>
                      <div className="fr-report-date">{r.date}</div>
                    </div>
                    <div className="fr-report-right">
                      <span className={`fr-sev-badge ${SEVERITY_COLORS[r.severity]}`}>{r.severity}</span>
                      <span className={`fr-status-badge ${r.statusClass}`}>{r.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

export default FaultReport;