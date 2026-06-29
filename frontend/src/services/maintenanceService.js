export const maintenanceTasks = [
  { task: "Calibrate Digital Oscilloscope", owner: "Electronics Team", due: "Jul 01, 2026", priority: "High" },
  { task: "Replace 3D Printer Nozzle", owner: "Manufacturing Team", due: "Jul 02, 2026", priority: "Critical" },
  { task: "Inspect Hydraulic Test Rig", owner: "Mechanical Team", due: "Jul 04, 2026", priority: "Medium" },
];

export const aiPredictions = [
  { equipment: "3D Printer", risk: "88%", issue: "Nozzle clog likely within 5 days" },
  { equipment: "Digital Oscilloscope", risk: "71%", issue: "Calibration drift detected" },
  { equipment: "Hydraulic Test Rig", risk: "54%", issue: "Pressure variation above normal" },
];

export async function getMaintenanceTasks() {
  return maintenanceTasks;
}

export async function getAIPredictions() {
  return aiPredictions;
}
