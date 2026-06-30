/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

const MOCK_USERS = [
  {
    id: 1,
    name: "Karthikeyan S",
    email: "student@lab.com",
    password: "student123",
    role: "STUDENT",
    regNo: "717824226",
    dept: "Information Technology",
    year: "2nd Year",
  },
  {
    id: 2,
    name: "Dr. Priya R",
    email: "faculty@lab.com",
    password: "faculty123",
    role: "FACULTY",
    regNo: "FAC001",
    dept: "Electronics",
    year: "",
  },
  {
    id: 3,
    name: "Admin User",
    email: "admin@lab.com",
    password: "admin123",
    role: "ADMIN",
    regNo: "ADM001",
    dept: "Administration",
    year: "",
  },
];

function withoutPassword(foundUser) {
  const safeUser = { ...foundUser };
  delete safeUser.password;
  return safeUser;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("labsync_user");
    if (!saved) return null;

    try {
      return JSON.parse(saved);
    } catch {
      localStorage.removeItem("labsync_user");
      return null;
    }
  });

  const login = useCallback((email, password) => {
    const found = MOCK_USERS.find(
      (mockUser) => mockUser.email === email && mockUser.password === password
    );

    if (!found) {
      return { success: false, message: "Invalid email or password." };
    }

    const safeUser = withoutPassword(found);
    localStorage.setItem("labsync_user", JSON.stringify(safeUser));
    setUser(safeUser);

    return { success: true, role: safeUser.role };
  }, []);

  const register = useCallback((formData) => {
    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role || "STUDENT",
      regNo: formData.regNo || "NEW001",
      dept: formData.department || "General",
      year: formData.role === "FACULTY" ? "" : "1st Year",
    };

    localStorage.setItem("labsync_user", JSON.stringify(newUser));
    setUser(newUser);

    return { success: true, role: newUser.role };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("labsync_user");
    setUser(null);
  }, []);

  const isAuthenticated = Boolean(user);

  const value = useMemo(
    () => ({ user, login, register, logout, isAuthenticated }),
    [user, login, register, logout, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
