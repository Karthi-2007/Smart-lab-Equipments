export const demoCredentials = [
  { role: "Student", email: "student@lab.com", password: "student123" },
  { role: "Faculty", email: "faculty@lab.com", password: "faculty123" },
  { role: "Admin", email: "admin@lab.com", password: "admin123" },
];

export const dashboardByRole = {
  STUDENT: "/student/dashboard",
  FACULTY: "/faculty/dashboard",
  ADMIN: "/admin/dashboard",
};

export function getDashboardPath(role) {
  return dashboardByRole[role] || "/";
}
