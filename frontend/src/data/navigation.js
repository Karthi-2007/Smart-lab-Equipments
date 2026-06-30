import { ROLES } from "../constants/roles";

export const navigation = {
  [ROLES.STUDENT]: [
    {
      label: "📊 Dashboard",
      path: "/student/dashboard",
    },
    {
      label: "🔧 Equipment",
      path: "/student/equipment",
    },
    {
      label: "📅 Book Equipment",
      path: "/student/book",
    },
    {
      label: "📈 Usage History",
      path: "/student/usage",
    },
    {
      label: "⚠️ Report Fault",
      path: "/student/fault",
    },
    {
      label: "👤 Profile",
      path: "/student/profile",
    },
  ],

  [ROLES.FACULTY]: [
    {
      label: "📊 Dashboard",
      path: "/faculty/dashboard",
    },
    {
      label: "✅ Booking Approvals",
      path: "/faculty/approvals",
    },
    {
      label: "🔧 Equipment",
      path: "/faculty/equipment",
    },
    {
      label: "⚠️ Fault Monitoring",
      path: "/faculty/faults",
    },
    {
      label: "📈 Analytics",
      path: "/faculty/analytics",
    },
    {
      label: "👤 Profile",
      path: "/faculty/profile",
    },
  ],

  [ROLES.ADMIN]: [
    {
      label: "📊 Dashboard",
      path: "/admin/dashboard",
    },
    {
      label: "👥 User Management",
      path: "/admin/users",
    },
    {
      label: "🔧 Equipment",
      path: "/admin/equipment",
    },
    {
      label: "📅 Booking Management",
      path: "/admin/bookings",
    },
    {
      label: "🛠 Maintenance",
      path: "/admin/maintenance",
    },
    {
      label: "🤖 AI Prediction",
      path: "/admin/ai",
    },
    {
      label: "👤 Profile",
      path: "/admin/profile",
    },
  ],
};