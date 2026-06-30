/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useCallback, useMemo } from "react";
import { MOCK_BOOKINGS, MOCK_EQUIPMENT, MOCK_FAULTS, MOCK_USERS } from "./mockData";

const DataContext = createContext(null);

export function DataProvider({ children }) {
  // ─── BOOKINGS STATE ───
  const [bookings, setBookings] = useState(MOCK_BOOKINGS);

  const createBooking = useCallback((newBooking) => {
    const booking = {
      id: Math.max(...bookings.map(b => b.id), 0) + 1,
      ...newBooking,
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    setBookings(prev => [...prev, booking]);
    return booking;
  }, [bookings]);

  const updateBooking = useCallback((id, updates) => {
    setBookings(prev =>
      prev.map(booking => (booking.id === id ? { ...booking, ...updates } : booking))
    );
  }, []);

  const deleteBooking = useCallback((id) => {
    setBookings(prev => prev.filter(booking => booking.id !== id));
  }, []);

  const approveBooking = useCallback((id, approvedBy) => {
    updateBooking(id, { status: "confirmed", approvedBy });
  }, [updateBooking]);

  const rejectBooking = useCallback((id, rejectionReason) => {
    updateBooking(id, { status: "rejected", rejectionReason });
  }, [updateBooking]);

  // ─── EQUIPMENT STATE ───
  const [equipment, setEquipment] = useState(MOCK_EQUIPMENT);

  const createEquipment = useCallback((newEquipment) => {
    const item = {
      id: Math.max(...equipment.map(e => e.id), 0) + 1,
      ...newEquipment,
      createdAt: new Date().toISOString(),
    };
    setEquipment(prev => [...prev, item]);
    return item;
  }, [equipment]);

  const updateEquipment = useCallback((id, updates) => {
    setEquipment(prev =>
      prev.map(item => (item.id === id ? { ...item, ...updates } : item))
    );
  }, []);

  const deleteEquipment = useCallback((id) => {
    setEquipment(prev => prev.filter(item => item.id !== id));
  }, []);

  const updateEquipmentStatus = useCallback((id, status) => {
    updateEquipment(id, { status });
  }, [updateEquipment]);

  // ─── FAULTS STATE ───
  const [faults, setFaults] = useState(MOCK_FAULTS);

  const createFault = useCallback((newFault) => {
    const fault = {
      id: Math.max(...faults.map(f => f.id), 0) + 1,
      ...newFault,
      status: "open",
      createdAt: new Date().toISOString(),
    };
    setFaults(prev => [...prev, fault]);
    return fault;
  }, [faults]);

  const updateFault = useCallback((id, updates) => {
    setFaults(prev =>
      prev.map(fault => (fault.id === id ? { ...fault, ...updates } : fault))
    );
  }, []);

  const deleteFault = useCallback((id) => {
    setFaults(prev => prev.filter(fault => fault.id !== id));
  }, []);

  const resolveFault = useCallback((id, resolution) => {
    updateFault(id, { status: "resolved", resolution, resolvedAt: new Date().toISOString() });
  }, [updateFault]);

  // ─── USERS STATE ───
  const [users, setUsers] = useState(MOCK_USERS);

  const createUser = useCallback((newUser) => {
    const user = {
      id: Math.max(...users.map(u => u.id), 0) + 1,
      ...newUser,
      status: "active",
      createdAt: new Date().toISOString(),
    };
    setUsers(prev => [...prev, user]);
    return user;
  }, [users]);

  const updateUser = useCallback((id, updates) => {
    setUsers(prev =>
      prev.map(user => (user.id === id ? { ...user, ...updates } : user))
    );
  }, []);

  const deleteUser = useCallback((id) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  }, []);

  // ─── DERIVED QUERIES ───
  const getBookingsByStudent = useCallback((studentId) => {
    return bookings.filter(b => b.studentId === studentId);
  }, [bookings]);

  const getBookingsByStatus = useCallback((status) => {
    return bookings.filter(b => b.status === status);
  }, [bookings]);

  const getEquipmentByStatus = useCallback((status) => {
    return equipment.filter(e => e.status === status);
  }, [equipment]);

  const getFaultsByStatus = useCallback((status) => {
    return faults.filter(f => f.status === status);
  }, [faults]);

  const getFaultsBySeverity = useCallback((severity) => {
    return faults.filter(f => f.severity === severity);
  }, [faults]);

  const getUsersByRole = useCallback((role) => {
    return users.filter(u => u.role === role);
  }, [users]);

  const getUsersByStatus = useCallback((status) => {
    return users.filter(u => u.status === status);
  }, [users]);

  // ─── STATISTICS ───
  const stats = useMemo(() => ({
    totalBookings: bookings.length,
    pendingBookings: bookings.filter(b => b.status === "pending").length,
    approvedBookings: bookings.filter(b => b.status === "confirmed").length,
    completedBookings: bookings.filter(b => b.status === "completed").length,
    rejectedBookings: bookings.filter(b => b.status === "rejected").length,

    totalEquipment: equipment.length,
    availableEquipment: equipment.filter(e => e.status === "available").length,
    bookedEquipment: equipment.filter(e => e.status === "in-use").length,
    maintenanceEquipment: equipment.filter(e => e.status === "maintenance").length,

    totalFaults: faults.length,
    openFaults: faults.filter(f => f.status === "open").length,
    resolvedFaults: faults.filter(f => f.status === "resolved").length,
    criticalFaults: faults.filter(f => f.severity === "critical").length,

    totalUsers: users.length,
    totalStudents: users.filter(u => u.role === "STUDENT").length,
    totalFaculty: users.filter(u => u.role === "FACULTY").length,
    activeUsers: users.filter(u => u.status === "active").length,
  }), [bookings, equipment, faults, users]);

  const value = useMemo(() => ({
    // Bookings
    bookings,
    createBooking,
    updateBooking,
    deleteBooking,
    approveBooking,
    rejectBooking,
    getBookingsByStudent,
    getBookingsByStatus,

    // Equipment
    equipment,
    createEquipment,
    updateEquipment,
    deleteEquipment,
    updateEquipmentStatus,
    getEquipmentByStatus,

    // Faults
    faults,
    createFault,
    updateFault,
    deleteFault,
    resolveFault,
    getFaultsByStatus,
    getFaultsBySeverity,

    // Users
    users,
    createUser,
    updateUser,
    deleteUser,
    getUsersByRole,
    getUsersByStatus,

    // Statistics
    stats,
  }), [
    bookings, createBooking, updateBooking, deleteBooking, approveBooking, rejectBooking,
    getBookingsByStudent, getBookingsByStatus,
    equipment, createEquipment, updateEquipment, deleteEquipment, updateEquipmentStatus,
    getEquipmentByStatus,
    faults, createFault, updateFault, deleteFault, resolveFault,
    getFaultsByStatus, getFaultsBySeverity,
    users, createUser, updateUser, deleteUser, getUsersByRole, getUsersByStatus,
    stats,
  ]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within DataProvider");
  }
  return context;
};
