/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useCallback, useMemo } from "react";

const NotificationContext = createContext(null);

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((message, type = "info", duration = 3000) => {
    const id = Date.now();
    const notification = { id, message, type };

    setNotifications(prev => [...prev, notification]);

    // Auto-remove after duration
    if (duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, duration);
    }

    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  }, []);

  const success = useCallback((message, duration = 3000) => {
    return addNotification(message, "success", duration);
  }, [addNotification]);

  const error = useCallback((message, duration = 4000) => {
    return addNotification(message, "error", duration);
  }, [addNotification]);

  const warning = useCallback((message, duration = 3500) => {
    return addNotification(message, "warning", duration);
  }, [addNotification]);

  const info = useCallback((message, duration = 3000) => {
    return addNotification(message, "info", duration);
  }, [addNotification]);

  const value = useMemo(() => ({
    notifications,
    addNotification,
    removeNotification,
    success,
    error,
    warning,
    info,
  }), [notifications, addNotification, removeNotification, success, error, warning, info]);

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within NotificationProvider");
  }
  return context;
};
