import React from "react";
import "./Notification.css";

function Notification() {
  const notifications = [
    {
      id: 1,
      title: "Booking Approved",
      message: "Your booking for Oscilloscope has been approved.",
      time: "5 mins ago",
      type: "success",
    },
    {
      id: 2,
      title: "Equipment Under Maintenance",
      message: "Power Supply is unavailable due to maintenance.",
      time: "30 mins ago",
      type: "warning",
    },
    {
      id: 3,
      title: "Fault Report Updated",
      message: "Your reported issue has been resolved.",
      time: "Today",
      type: "info",
    },
    {
      id: 4,
      title: "AI Prediction Alert",
      message: "Function Generator is likely to require servicing soon.",
      time: "Yesterday",
      type: "danger",
    },
    {
      id: 5,
      title: "Booking Reminder",
      message: "Your booking starts in 30 minutes.",
      time: "Today",
      type: "success",
    },
  ];

  return (
    <div className="notification-page">

      <div className="notification-header">
        <h1>🔔 Notifications</h1>
        <p>Latest updates from LabSync AI</p>
      </div>

      <div className="notification-list">

        {notifications.map((item) => (
          <div
            key={item.id}
            className={`notification-card ${item.type}`}
          >
            <div className="notification-content">
              <h3>{item.title}</h3>
              <p>{item.message}</p>
            </div>

            <span className="notification-time">
              {item.time}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Notification;