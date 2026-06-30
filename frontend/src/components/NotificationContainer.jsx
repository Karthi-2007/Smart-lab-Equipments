import { useNotification } from "../context/NotificationContext";
import "./NotificationContainer.css";

function NotificationContainer() {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`notification notification-${notification.type}`}
          role="alert"
        >
          <div className="notification-content">
            <span className="notification-icon">
              {notification.type === "success" && "✓"}
              {notification.type === "error" && "✕"}
              {notification.type === "warning" && "!"}
              {notification.type === "info" && "ⓘ"}
            </span>
            <span className="notification-message">{notification.message}</span>
          </div>
          <button
            className="notification-close"
            onClick={() => removeNotification(notification.id)}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}

export default NotificationContainer;
