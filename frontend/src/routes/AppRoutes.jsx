import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import Contact from "../pages/Contact";
import Unauthorized from "../pages/Unauthorized";

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

import { ROLES } from "../constants/roles";
import { DASHBOARD_PATHS } from "../constants/routes";

function ProtectedRoute({ children, allowedRoles }) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
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

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <Navigate
      to={DASHBOARD_PATHS[user?.role] || "/"}
      replace
    />
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/student" element={<RoleHome />} />
      <Route
        path="/student/dashboard"
        element={<ProtectedRoute allowedRoles={[ROLES.STUDENT]}><StudentDashboard /></ProtectedRoute>}
      />
      <Route
        path="/student/equipment"
        element={<ProtectedRoute allowedRoles={[ROLES.STUDENT]}><EquipmentList /></ProtectedRoute>}
      />
      <Route
        path="/student/book"
        element={<ProtectedRoute allowedRoles={[ROLES.STUDENT]}><BookEquipment /></ProtectedRoute>}
      />
      <Route
        path="/student/usage"
        element={<ProtectedRoute allowedRoles={[ROLES.STUDENT]}><UsageHistory /></ProtectedRoute>}
      />
      <Route
        path="/student/fault"
        element={<ProtectedRoute allowedRoles={[ROLES.STUDENT]}><FaultReport /></ProtectedRoute>}
      />
      <Route
        path="/student/profile"
        element={<ProtectedRoute allowedRoles={[ROLES.STUDENT]}><Profile /></ProtectedRoute>}
      />

      <Route path="/faculty" element={<RoleHome />} />
      <Route
        path="/faculty/dashboard"
        element={<ProtectedRoute allowedRoles={[ROLES.FACULTY]}><FacultyDashboard /></ProtectedRoute>}
      />
      <Route
        path="/faculty/approvals"
        element={<ProtectedRoute allowedRoles={[ROLES.FACULTY]}><BookingApprovals /></ProtectedRoute>}
      />
      <Route
        path="/faculty/faults"
        element={<ProtectedRoute allowedRoles={[ROLES.FACULTY]}><FaultMonitoring /></ProtectedRoute>}
      />
      <Route
        path="/faculty/analytics"
        element={<ProtectedRoute allowedRoles={[ROLES.FACULTY]}><Analytics /></ProtectedRoute>}
      />

      <Route path="/admin" element={<RoleHome />} />
      <Route
        path="/admin/dashboard"
        element={<ProtectedRoute allowedRoles={[ROLES.ADMIN]}><AdminDashboard /></ProtectedRoute>}
      />
      <Route
        path="/admin/users"
        element={<ProtectedRoute allowedRoles={[ROLES.ADMIN]}><UserManagement /></ProtectedRoute>}
      />
      <Route
        path="/admin/equipment"
        element={<ProtectedRoute allowedRoles={[ROLES.ADMIN]}><EquipmentManagement /></ProtectedRoute>}
      />
      <Route
        path="/admin/bookings"
        element={<ProtectedRoute allowedRoles={[ROLES.ADMIN]}><BookingManagement /></ProtectedRoute>}
      />
      <Route
        path="/admin/maintenance"
        element={<ProtectedRoute allowedRoles={[ROLES.ADMIN]}><MaintenanceManagement /></ProtectedRoute>}
      />
      <Route
        path="/admin/ai"
        element={<ProtectedRoute allowedRoles={[ROLES.ADMIN]}><AIPredictions /></ProtectedRoute>}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
