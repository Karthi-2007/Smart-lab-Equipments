import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FaultReport.css";
import { useAuth } from "../../context/AuthContext";

function FaultReport() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    equipment: "",
    issue: "",
    description: "",
    severity: "medium",
    photos: null,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const equipmentOptions = [
    "Oscilloscope",
    "Multimeter",
    "Function Generator",
    "Power Supply",
    "Logic Analyzer",
    "Soldering Station",
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.equipment) newErrors.equipment = "Please select equipment";
    if (!formData.issue.trim()) newErrors.issue = "Please describe the issue";
    if (formData.issue.length < 10) newErrors.issue = "Issue description must be at least 10 characters";
    if (!formData.description.trim()) newErrors.description = "Detailed description is required";
    if (formData.description.length < 20) newErrors.description = "Description must be at least 20 characters";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photos: e.target.files[0]?.name || null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setSuccessMessage("✅ Fault report submitted successfully! Technicians have been notified.");
      setFormData({ equipment: "", issue: "", description: "", severity: "medium", photos: null });
      setLoading(false);
      setTimeout(() => navigate("/student/dashboard"), 2000);
    }, 1000);
  };

  return (
    <div className="fault-report-page">
      <div className="page-header">
        <h1>⚠️ Report Equipment Fault</h1>
        <p>Help us maintain equipment by reporting issues immediately</p>
      </div>

      <div className="report-container">
        {/* Report Form */}
        <div className="report-form-section">
          <h2>Fault Report Form</h2>

          {successMessage && <div className="success-message">{successMessage}</div>}

          <form onSubmit={handleSubmit} className="fault-form">
            {/* Equipment Selection */}
            <div className="form-group">
              <label htmlFor="equipment">Equipment Name *</label>
              <select
                id="equipment"
                name="equipment"
                value={formData.equipment}
                onChange={handleChange}
                className={errors.equipment ? "error" : ""}
              >
                <option value="">-- Select Equipment --</option>
                {equipmentOptions.map(eq => (
                  <option key={eq} value={eq}>{eq}</option>
                ))}
              </select>
              {errors.equipment && <span className="error-text">{errors.equipment}</span>}
            </div>

            {/* Issue Title */}
            <div className="form-group">
              <label htmlFor="issue">Issue Title *</label>
              <input
                id="issue"
                type="text"
                name="issue"
                placeholder="e.g., Display flickering, No output signal"
                value={formData.issue}
                onChange={handleChange}
                className={errors.issue ? "error" : ""}
              />
              {errors.issue && <span className="error-text">{errors.issue}</span>}
              <p className="char-count">{formData.issue.length}/100 characters</p>
            </div>

            {/* Severity Level */}
            <div className="form-group">
              <label htmlFor="severity">Severity Level *</label>
              <div className="severity-options">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="severity"
                    value="low"
                    checked={formData.severity === "low"}
                    onChange={handleChange}
                  />
                  <span className="radio-label">🟢 Low - Minor issue, equipment usable</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="severity"
                    value="medium"
                    checked={formData.severity === "medium"}
                    onChange={handleChange}
                  />
                  <span className="radio-label">🟡 Medium - Significant issue, limited use</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="severity"
                    value="high"
                    checked={formData.severity === "high"}
                    onChange={handleChange}
                  />
                  <span className="radio-label">🔴 High - Critical issue, unusable</span>
                </label>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="form-group">
              <label htmlFor="description">Detailed Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide detailed information about the fault, when it started, what you were doing when it occurred..."
                rows="6"
                className={errors.description ? "error" : ""}
              />
              {errors.description && <span className="error-text">{errors.description}</span>}
              <p className="char-count">{formData.description.length}/500 characters</p>
            </div>

            {/* Photo Upload */}
            <div className="form-group">
              <label htmlFor="photos">Upload Photos (Optional)</label>
              <div className="file-input-wrapper">
                <input
                  id="photos"
                  type="file"
                  name="photos"
                  onChange={handleFileChange}
                  accept="image/*"
                  multiple
                />
                <span className="file-label">
                  📸 {formData.photos ? formData.photos : "Choose images..."}
                </span>
              </div>
              <p className="help-text">Upload clear photos showing the fault or error condition</p>
            </div>

            {/* Submit Button */}
            <div className="form-actions">
              <button type="submit" className="btn btn-submit" disabled={loading}>
                {loading ? "Submitting..." : "📤 Submit Fault Report"}
              </button>
              <button type="button" className="btn btn-cancel" onClick={() => navigate("/student/dashboard")}>
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Information Section */}
        <div className="info-section">
          <h2>ℹ️ Important Information</h2>
          
          <div className="info-card">
            <h4>When to Report a Fault</h4>
            <ul>
              <li>Equipment displays error messages</li>
              <li>Unusual sounds or vibrations</li>
              <li>Display or output issues</li>
              <li>Power or connectivity problems</li>
              <li>Any safety concerns</li>
              <li>Physical damage or wear</li>
            </ul>
          </div>

          <div className="info-card warning">
            <h4>⚠️ Emergency</h4>
            <p>If there's an immediate safety risk, stop using the equipment immediately and alert a staff member.</p>
          </div>

          <div className="info-card">
            <h4>What Happens Next</h4>
            <ol>
              <li>Your report is reviewed by technical staff</li>
              <li>Equipment is marked unavailable if needed</li>
              <li>Technicians are assigned for repair</li>
              <li>You'll receive status updates via email</li>
              <li>Equipment returns to service when repaired</li>
            </ol>
          </div>

          <div className="info-card">
            <h4>Tips for Better Reports</h4>
            <ul>
              <li>✓ Be specific about what went wrong</li>
              <li>✓ Include when the issue started</li>
              <li>✓ Describe the exact error message</li>
              <li>✓ Upload clear, well-lit photos</li>
              <li>✓ Mention any recent impacts or incidents</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaultReport;
