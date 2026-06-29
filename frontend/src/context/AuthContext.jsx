import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

// Mock users — replace with real API later
const MOCK_USERS = [
  { id: 1, name: "Karthikeyan S", email: "student@lab.com", password: "student123", role: "STUDENT", regNo: "717824226", dept: "Information Technology", year: "2nd Year" },
  { id: 2, name: "Dr. Priya R",   email: "faculty@lab.com", password: "faculty123", role: "FACULTY",  regNo: "FAC001",    dept: "Electronics",          year: "" },
  { id: 3, name: "Admin User",    email: "admin@lab.com",   password: "admin123",   role: "ADMIN",    regNo: "ADM001",    dept: "Administration",       year: "" },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("labsync_user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email, password) => {
    const found = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) return { success: false, message: "Invalid email or password." };

    const { password: _, ...safeUser } = found;
    localStorage.setItem("labsync_user", JSON.stringify(safeUser));
    setUser(safeUser);
    return { success: true, role: safeUser.role };
  };

  const register = (formData) => {
    // Mock registration — always succeeds
    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role || "STUDENT",
      regNo: formData.regNo || "NEW001",
      dept: formData.department || "General",
      year: "1st Year",
    };
    localStorage.setItem("labsync_user", JSON.stringify(newUser));
    setUser(newUser);
    return { success: true, role: newUser.role };
  };

  const logout = () => {
    localStorage.removeItem("labsync_user");
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}