import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import StudentDashboard from "../pages/student/StudentDashboard";
import EquipmentList from "../pages/student/EquipmentList";
import BookEquipment from "../pages/student/BookEquipment";
import UsageHistory from "../pages/student/UsageHistory";
import FaultReport from "../pages/student/FaultReport";
import Profile from "../pages/student/Profile";

import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import BookingApprovals from "../pages/faculty/BookingApprovals";
import FaultMonitoring from "../pages/faculty/FaultMonitoring";
import Analytics from "../pages/faculty/Analytics";

import AdminDashboard from "../pages/admin/AdminDashboard";
import UserManagement from "../pages/admin/UserManagement";
import EquipmentManagement from "../pages/admin/EquipmentManagement";
import BookingManagement from "../pages/admin/BookingManagement";
import MaintenanceManagement from "../pages/admin/MaintenanceManagement";
import AIPredictions from "../pages/admin/AIPredictions";

const dashboardPath = {
  STUDENT: "/student/dashboard",
  FACULTY: "/faculty/dashboard",
  ADMIN: "/admin/dashboard",
};

function ProtectedRoute({ children, allowedRoles }) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to={dashboardPath[user?.role] || "/login"} replace />;
  }

  return children;
}

function LogoutPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/login", { replace: true });
  }, [logout, navigate]);

  return null;
}

function RoleHome() {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) return <Navigate to="/" replace />;

  return <Navigate to={dashboardPath[user?.role] || "/"} replace />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<LogoutPage />} />

      <Route path="/student" element={<RoleHome />} />
      <Route
        path="/student/dashboard"
        element={<ProtectedRoute allowedRoles={["STUDENT"]}><StudentDashboard /></ProtectedRoute>}
      />
      <Route
        path="/student/equipment"
        element={<ProtectedRoute allowedRoles={["STUDENT"]}><EquipmentList /></ProtectedRoute>}
      />
      <Route
        path="/student/book"
        element={<ProtectedRoute allowedRoles={["STUDENT"]}><BookEquipment /></ProtectedRoute>}
      />
      <Route
        path="/student/usage"
        element={<ProtectedRoute allowedRoles={["STUDENT"]}><UsageHistory /></ProtectedRoute>}
      />
      <Route
        path="/student/fault"
        element={<ProtectedRoute allowedRoles={["STUDENT"]}><FaultReport /></ProtectedRoute>}
      />
      <Route
        path="/student/profile"
        element={<ProtectedRoute allowedRoles={["STUDENT"]}><Profile /></ProtectedRoute>}
      />

      <Route path="/faculty" element={<RoleHome />} />
      <Route
        path="/faculty/dashboard"
        element={<ProtectedRoute allowedRoles={["FACULTY"]}><FacultyDashboard /></ProtectedRoute>}
      />
      <Route
        path="/faculty/approvals"
        element={<ProtectedRoute allowedRoles={["FACULTY"]}><BookingApprovals /></ProtectedRoute>}
      />
      <Route
        path="/faculty/faults"
        element={<ProtectedRoute allowedRoles={["FACULTY"]}><FaultMonitoring /></ProtectedRoute>}
      />
      <Route
        path="/faculty/analytics"
        element={<ProtectedRoute allowedRoles={["FACULTY"]}><Analytics /></ProtectedRoute>}
      />

      <Route path="/admin" element={<RoleHome />} />
      <Route
        path="/admin/dashboard"
        element={<ProtectedRoute allowedRoles={["ADMIN"]}><AdminDashboard /></ProtectedRoute>}
      />
      <Route
        path="/admin/users"
        element={<ProtectedRoute allowedRoles={["ADMIN"]}><UserManagement /></ProtectedRoute>}
      />
      <Route
        path="/admin/equipment"
        element={<ProtectedRoute allowedRoles={["ADMIN"]}><EquipmentManagement /></ProtectedRoute>}
      />
      <Route
        path="/admin/bookings"
        element={<ProtectedRoute allowedRoles={["ADMIN"]}><BookingManagement /></ProtectedRoute>}
      />
      <Route
        path="/admin/maintenance"
        element={<ProtectedRoute allowedRoles={["ADMIN"]}><MaintenanceManagement /></ProtectedRoute>}
      />
      <Route
        path="/admin/ai"
        element={<ProtectedRoute allowedRoles={["ADMIN"]}><AIPredictions /></ProtectedRoute>}
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
