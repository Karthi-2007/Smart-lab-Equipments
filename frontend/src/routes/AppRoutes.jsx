import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Home            from "../pages/Home";
import Login           from "../pages/Login";
import Register        from "../pages/Register";
import StudentDashboard from "../pages/student/StudentDashboard";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import AdminDashboard   from "../pages/admin/AdminDashboard";
import EquipmentList   from "../pages/student/EquipmentList";
import BookEquipment   from "../pages/student/BookEquipment";
import UsageHistory    from "../pages/student/UsageHistory";
import FaultReport     from "../pages/student/FaultReport";
import Profile         from "../pages/student/Profile";

// Redirects to /login if not logged in
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

// Handles /logout — clears auth and sends to login
function LogoutPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    logout();
    navigate("/login", { replace: true });
  }, []);
  return null;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/"         element={<Home />} />
      <Route path="/login"    element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout"   element={<LogoutPage />} />

      {/* Student */}
      <Route path="/student/dashboard" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
      <Route path="/student/equipment" element={<ProtectedRoute><EquipmentList /></ProtectedRoute>} />
      <Route path="/student/book"      element={<ProtectedRoute><BookEquipment /></ProtectedRoute>} />
      <Route path="/student/usage"     element={<ProtectedRoute><UsageHistory /></ProtectedRoute>} />
      <Route path="/student/fault"     element={<ProtectedRoute><FaultReport /></ProtectedRoute>} />
      <Route path="/student/profile"   element={<ProtectedRoute><Profile /></ProtectedRoute>} />

      {/* Faculty */}
      <Route path="/faculty/dashboard" element={<ProtectedRoute><FacultyDashboard /></ProtectedRoute>} />

      {/* Admin */}
      <Route path="/admin/dashboard"   element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;