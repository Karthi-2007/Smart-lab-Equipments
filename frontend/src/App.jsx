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
import BookingApprovals from "./pages/faculty/BookingApprovals";
import FaultMonitoring from "./pages/faculty/FaultMonitoring";
import Analytics from "./pages/faculty/Analytics";
import FacultyProfile from "./pages/faculty/FacultyProfile";
import EquipmentMonitoring from "./pages/faculty/EquipmentMonitoring";



// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagement from "./pages/admin/UserManagement";
import EquipmentManagement from "./pages/admin/EquipmentManagement";
import BookingManagement from "./pages/admin/BookingManagement";
import MaintenanceManagement from "./pages/admin/MaintenanceManagement";
import AIPredictions from "./pages/admin/AIPredictions";
import AdminProfile from "./pages/admin/AdminProfile";


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

<Route
  path="/faculty/approvals"
  element={
    <ProtectedRoute allowedRoles={["FACULTY"]}>
      <BookingApprovals />
    </ProtectedRoute>
  }
/>


<Route
  path="/faculty/faults"
  element={
    <ProtectedRoute allowedRoles={["FACULTY"]}>
      <FaultMonitoring />
    </ProtectedRoute>
  }
/>

<Route
  path="/faculty/analytics"
  element={
    <ProtectedRoute allowedRoles={["FACULTY"]}>
      <Analytics />
    </ProtectedRoute>
  }
/>

<Route
  path="/faculty/profile"
  element={
    <ProtectedRoute allowedRoles={["FACULTY"]}>
      <FacultyProfile />
    </ProtectedRoute>
  }
/>

<Route
  path="/faculty/equipment"
  element={
    <ProtectedRoute allowedRoles={["FACULTY"]}>
      <EquipmentMonitoring />
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

<Route
  path="/admin/users"
  element={
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <UserManagement />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/equipment"
  element={
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <EquipmentManagement />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/bookings"
  element={
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <BookingManagement />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/maintenance"
  element={
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <MaintenanceManagement />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/ai"
  element={
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <AIPredictions />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/profile"
  element={
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <AdminProfile />
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