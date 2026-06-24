import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import StudentDashboard from "../pages/student/StudentDashboard";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import EquipmentList from "../pages/student/EquipmentList";
import BookEquipment from "../pages/student/BookEquipment";
import UsageHistory from "../pages/student/UsageHistory";
import FaultReport from "../pages/student/FaultReport";
import Profile from "../pages/student/Profile";


function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/student/equipment" element={<EquipmentList />} />
        <Route path="/student/book" element={<BookEquipment />} />
        <Route path="/student/usage" element={<UsageHistory />} />
        <Route path="/student/fault" element={<FaultReport />} />
        <Route path="/student/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default AppRoutes
