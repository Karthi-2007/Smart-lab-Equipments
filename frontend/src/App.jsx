import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout";

// Auth Pages
import Login from "./pages/Login";
import Register from "./pages/Register";

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

// 404 Page
function NotFound() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes with Layout */}
          <Route element={<Layout />}>
            {/* Student Routes */}
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/equipment" element={<EquipmentList />} />
            <Route path="/student/book" element={<BookEquipment />} />
            <Route path="/student/usage" element={<UsageHistory />} />
            <Route path="/student/fault" element={<FaultReport />} />
            <Route path="/profile" element={<Profile />} />

            {/* Faculty Routes */}
            <Route path="/faculty/dashboard" element={<FacultyDashboard />} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>

          {/* Default Routes */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
