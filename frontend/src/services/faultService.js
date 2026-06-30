const faultReports = [
  { id: "FT-501", equipment: "3D Printer", severity: "High", status: "Open", reportedBy: "Premnath P" },
  { id: "FT-502", equipment: "Arduino Uno Kit", severity: "Low", status: "In Progress", reportedBy: "Karthikeyan S" },
  { id: "FT-503", equipment: "Digital Oscilloscope", severity: "Medium", status: "Resolved", reportedBy: "Hariharan A" },
];

export async function getFaultReports() {
  return faultReports;
}

export async function submitFaultReport(payload) {
  return {
    id: `FT-${Date.now()}`,
    status: "Open",
    ...payload,
  };
}
