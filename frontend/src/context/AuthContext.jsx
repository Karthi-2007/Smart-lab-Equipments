/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

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

function withoutPassword(user) {
  const safeUser = { ...user };
  delete safeUser.password;
  return safeUser;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from Local Storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("labsync_user");

      if (saved) {
        setUser(JSON.parse(saved));
      }
    } catch (err) {
      console.error("Failed to load user:", err);
      localStorage.removeItem("labsync_user");
    } finally {
      setLoading(false);
    }
  }, []);

  // Login
  const login = useCallback((email, password) => {
    const foundUser = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    const safeUser = withoutPassword(foundUser);

    localStorage.setItem("labsync_user", JSON.stringify(safeUser));

    setUser(safeUser);

    return {
      success: true,
      role: safeUser.role,
    };
  }, []);

  // Register
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

    return {
      success: true,
      role: newUser.role,
    };
  }, []);

  // Logout
  const logout = useCallback(() => {
    localStorage.removeItem("labsync_user");
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      login,
      register,
      logout,
      isAuthenticated: !!user,
    }),
    [user, loading, login, register, logout]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}