import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookEquipment.css";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

function BookEquipment() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { equipment, createBooking } = useData();
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [bookingData, setBookingData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    purpose: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const availableEquipment = equipment.filter(e => e.status === "available");

  const validateForm = () => {
    const newErrors = {};
    if (!selectedEquipment) newErrors.equipment = "Please select equipment";
    if (!bookingData.date) newErrors.date = "Please select a date";
    if (!bookingData.startTime) newErrors.startTime = "Please select start time";
    if (!bookingData.endTime) newErrors.endTime = "Please select end time";
    if (bookingData.startTime && bookingData.endTime && bookingData.startTime >= bookingData.endTime) {
      newErrors.time = "End time must be after start time";
    }
    if (!bookingData.purpose.trim()) newErrors.purpose = "Please specify the purpose";
    if (bookingData.purpose.length < 10) newErrors.purpose = "Purpose must be at least 10 characters";
    return newErrors;
  };

  const handleEquipmentChange = (e) => {
    setSelectedEquipment(e.target.value);
    if (errors.equipment) setErrors({ ...errors, equipment: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    createBooking({
      studentId: user.id,
      studentName: user.name,
      equipmentId: parseInt(selectedEquipment),
      equipmentName: equipment.find(e => e.id === parseInt(selectedEquipment))?.name,
      ...bookingData,
    });
    setTimeout(() => {
      setSuccessMessage("✅ Booking request submitted successfully! Awaiting faculty approval...");
      setSelectedEquipment("");
      setBookingData({ date: "", startTime: "", endTime: "", purpose: "" });
      setLoading(false);
      setTimeout(() => navigate("/student/dashboard"), 2000);
    }, 1000);
  };

  const selectedEquipmentDetails = equipment.find(e => e.id === parseInt(selectedEquipment));

  return (
    <div className="book-equipment-page">
      <div className="page-header">
        <h1>📅 Book Equipment</h1>
        <p>Request laboratory equipment for your experiments</p>
      </div>

      <div className="booking-container">
        {/* Booking Form */}
        <div className="booking-form-section">
          <h2>Booking Form</h2>
          
          {successMessage && <div className="success-message">{successMessage}</div>}

          <form onSubmit={handleSubmit} className="booking-form">
            {/* Equipment Selection */}
            <div className="form-group">
              <label htmlFor="equipment">Select Equipment *</label>
              <select
                id="equipment"
                value={selectedEquipment}
                onChange={handleEquipmentChange}
                className={errors.equipment ? "error" : ""}
              >
                <option value="">-- Choose Equipment --</option>
                {availableEquipment.map(eq => (
                  <option key={eq.id} value={eq.id}>
  {eq.name} ({eq.labName})
</option>
                ))}
              </select>
              {errors.equipment && <span className="error-text">{errors.equipment}</span>}
            </div>

            {/* Equipment Details */}
{selectedEquipmentDetails && (
  <div className="equipment-details">
    <h4>Selected Equipment Details</h4>

    <div className="details-grid">
      <div className="detail">
        <span className="label">Category:</span>
        <span className="value">
          {selectedEquipmentDetails.category}
        </span>
      </div>

      <div className="detail">
        <span className="label">Laboratory:</span>
        <span className="value">
          {selectedEquipmentDetails.labName}
        </span>
      </div>

      <div className="detail">
        <span className="label">Condition:</span>
        <span className="value">
          {selectedEquipmentDetails.condition}
        </span>
      </div>

      <div className="detail">
        <span className="label">Last Maintenance:</span>
        <span className="value">
          {selectedEquipmentDetails.lastMaintenance}
        </span>
      </div>

      <div className="detail">
        <span className="label">Next Maintenance:</span>
        <span className="value">
          {selectedEquipmentDetails.nextMaintenance}
        </span>
      </div>

      <div className="detail">
        <span className="label">Utilization Rate:</span>
        <span className="value">
          {selectedEquipmentDetails.utilizationRate}
        </span>
      </div>

      <div className="detail">
        <span className="label">Description:</span>
        <span className="value">
          {selectedEquipmentDetails.description}
        </span>
      </div>
    </div>
  </div>
)}

            {/* Date & Time */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Booking Date *</label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={bookingData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={errors.date ? "error" : ""}
                />
                {errors.date && <span className="error-text">{errors.date}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="startTime">Start Time *</label>
                <input
                  id="startTime"
                  type="time"
                  name="startTime"
                  value={bookingData.startTime}
                  onChange={handleInputChange}
                  className={errors.startTime ? "error" : ""}
                />
                {errors.startTime && <span className="error-text">{errors.startTime}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="endTime">End Time *</label>
                <input
                  id="endTime"
                  type="time"
                  name="endTime"
                  value={bookingData.endTime}
                  onChange={handleInputChange}
                  className={errors.endTime ? "error" : ""}
                />
                {errors.endTime && <span className="error-text">{errors.endTime}</span>}
              </div>
            </div>

            {errors.time && <span className="error-text" style={{display: "block", marginBottom: "15px"}}>{errors.time}</span>}

            {/* Purpose */}
            <div className="form-group">
              <label htmlFor="purpose">Purpose of Booking *</label>
              <textarea
                id="purpose"
                name="purpose"
                value={bookingData.purpose}
                onChange={handleInputChange}
                placeholder="Describe the experiment or purpose of equipment usage..."
                rows="4"
                className={errors.purpose ? "error" : ""}
              />
              <p className="char-count">{bookingData.purpose.length}/200 characters</p>
              {errors.purpose && <span className="error-text">{errors.purpose}</span>}
            </div>

            {/* Buttons */}
            <div className="form-actions">
              <button type="submit" className="btn btn-submit" disabled={loading}>
                {loading ? "Submitting..." : "📤 Submit Booking Request"}
              </button>
              <button type="button" className="btn btn-cancel" onClick={() => navigate("/student/dashboard")}>
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Booking Guidelines */}
        <div className="guidelines-section">
          <h2>📋 Booking Guidelines</h2>
          <div className="guidelines">
            <div className="guideline-card">
              <h4>⏰ Time Slots</h4>
              <p>Equipment can be booked for 1-4 hours per session. Standard lab hours are 9 AM to 5 PM.</p>
            </div>
            <div className="guideline-card">
              <h4>✅ Approval</h4>
              <p>Faculty approval is required for all bookings. Approved bookings appear in your dashboard.</p>
            </div>
            <div className="guideline-card">
              <h4>🔒 Safety</h4>
              <p>All users must follow lab safety protocols. Proper training is required for specialized equipment.</p>
            </div>
            <div className="guideline-card">
              <h4>📝 Cancellation</h4>
              <p>Bookings can be cancelled up to 2 hours before the scheduled time without penalty.</p>
            </div>
            <div className="guideline-card">
              <h4>⚠️ Damage Report</h4>
              <p>Report any equipment damage immediately. Users are responsible for equipment handling.</p>
            </div>
            <div className="guideline-card">
              <h4>🎯 Utilization</h4>
              <p>Equipment must be used only for approved academic purposes. Commercial use is strictly prohibited.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookEquipment;
