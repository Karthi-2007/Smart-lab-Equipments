import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

// Auth Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Unauthorized from "./pages/Unauthorized";

// Student Pages
import StudentDashboard from "./pages/student/StudentDashboard";
import EquipmentList from "./pages/student/EquipmentList";
import BookEquipment from "./pages/student/BookEquipment";
import UsageHistory from "./pages/student/UsageHistory";
import FaultReport from "./pages/student/FaultReport";
import Profile from "./pages/student/Profile";

// Faculty Pages
import FacultyDashboard from "./pages/faculty/FacultyDashboard";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";

function NotFound() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  );
}

function App() {
  return (
      <Routes>
        {/* Public Routes */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected Routes */}

        <Route element={<Layout />}>

          {/* Student */}

          <Route
            path="/student/dashboard"
            element={
              <ProtectedRoute allowedRoles={["STUDENT"]}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student/equipment"
            element={
              <ProtectedRoute allowedRoles={["STUDENT"]}>
                <EquipmentList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student/book"
            element={
              <ProtectedRoute allowedRoles={["STUDENT"]}>
                <BookEquipment />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student/usage"
            element={
              <ProtectedRoute allowedRoles={["STUDENT"]}>
                <UsageHistory />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student/fault"
            element={
              <ProtectedRoute allowedRoles={["STUDENT"]}>
                <FaultReport />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student/profile"
            element={
              <ProtectedRoute allowedRoles={["STUDENT"]}>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Faculty */}

          <Route
            path="/faculty/dashboard"
            element={
              <ProtectedRoute allowedRoles={["FACULTY"]}>
                <FacultyDashboard />
              </ProtectedRoute>
            }
          />

          {/* Admin */}

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;