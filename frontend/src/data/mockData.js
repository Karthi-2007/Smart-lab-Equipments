// Mock data for equipment, bookings, and users
import oscilloscopeImg from "../assets/images/oscilloscope.png";
import multimeterImg from "../assets/images/multimeter.png";
import powerSupplyImg from "../assets/images/power-supply.png";
import logicAnalyzerImg from "../assets/images/logic-analyzer.png";
import solderingStationImg from "../assets/images/soldering-station.png";
import microscopeImg from "../assets/images/microscope.png";

export const MOCK_EQUIPMENT = [
  {
    id: 1,
    name: "Oscilloscope",
    category: "Electronic Measurement",
    status: "available",
    description: "Digital Oscilloscope 200MHz",
    specifications: "200MHz, 2 GSa/s, 7 TFT Display",
    image: oscilloscopeImg,
    location: "Lab A - Bench 1",
    maintenanceDate: "2026-07-15",
    lastServiced: "2026-06-01",
    bookingsPerWeek: 12
  },
  {
    id: 2,
    name: "Multimeter",
    category: "Electronic Measurement",
    status: "available",
    description: "Digital Multimeter with True RMS",
    specifications: "AC/DC Voltage, Current, Resistance, Capacitance",
    image: multimeterImg,
    location: "Lab A - Bench 2",
    maintenanceDate: "2026-08-10",
    lastServiced: "2026-05-15",
    bookingsPerWeek: 8
  },
  {
    id: 3,
    name: "Function Generator",
    category: "Signal Generation",
    status: "in-use",
    description: "Arbitrary Function Generator 30MHz",
    specifications: "30MHz, 250 MSa/s, Multiple Waveforms",
    image: microscopeImg,
    location: "Lab B - Bench 1",
    maintenanceDate: "2026-07-20",
    lastServiced: "2026-06-10",
    bookingsPerWeek: 15
  },
  {
    id: 4,
    name: "Power Supply",
    category: "Power Systems",
    status: "maintenance",
    description: "Programmable DC Power Supply 0-30V",
    specifications: "0-30V, 0-10A, USB Interface",
    image: powerSupplyImg,
    location: "Lab A - Bench 3",
    maintenanceDate: "2026-06-30",
    lastServiced: "2026-04-20",
    bookingsPerWeek: 10
  },
  {
    id: 5,
    name: "Logic Analyzer",
    category: "Electronic Measurement",
    status: "available",
    description: "USB Logic Analyzer 34 Channels",
    specifications: "34 Channels, 1GHz Sampling, 34MB Memory",
    image: logicAnalyzerImg,
    location: "Lab B - Bench 2",
    maintenanceDate: "2026-08-05",
    lastServiced: "2026-06-05",
    bookingsPerWeek: 6
  },
  {
    id: 6,
    name: "Soldering Station",
    category: "Assembly & Repair",
    status: "available",
    description: "Digital Soldering Station with Fume Extractor",
    specifications: "200-450°C, ESD Safe, Wet Sponge",
    image: solderingStationImg,
    location: "Lab C - Workbench 1",
    maintenanceDate: "2026-07-25",
    lastServiced: "2026-05-30",
    bookingsPerWeek: 20
  }
];

export const MOCK_BOOKINGS = [
  {
    id: 101,
    equipmentId: 1,
    equipmentName: "Oscilloscope",
    studentName: "Karthikeyan S",
    studentId: "717824226",
    bookingDate: "2026-06-29",
    startTime: "10:00",
    endTime: "12:00",
    status: "confirmed",
    purpose: "Circuit Analysis",
    approvedBy: "Dr. Priya R"
  },
  {
    id: 102,
    equipmentId: 3,
    equipmentName: "Function Generator",
    studentName: "Karthikeyan S",
    studentId: "717824226",
    bookingDate: "2026-06-28",
    startTime: "14:00",
    endTime: "15:30",
    status: "completed",
    purpose: "Signal Testing",
    approvedBy: "Dr. Priya R"
  },
  {
    id: 103,
    equipmentId: 2,
    equipmentName: "Multimeter",
    studentName: "Karthikeyan S",
    studentId: "717824226",
    bookingDate: "2026-06-30",
    startTime: "09:00",
    endTime: "11:00",
    status: "pending",
    purpose: "Measurement Practice",
    approvedBy: null
  },
  {
    id: 104,
    equipmentId: 1,
    equipmentName: "Oscilloscope",
    studentName: "Arjun K",
    studentId: "717824227",
    bookingDate: "2026-06-30",
    startTime: "15:00",
    endTime: "17:00",
    status: "pending",
    purpose: "Wave Analysis",
    approvedBy: null
  }
];

export const MOCK_FAULTS = [
  {
    id: 201,
    equipmentId: 4,
    equipmentName: "Power Supply",
    reportedBy: "Karthikeyan S",
    reportDate: "2026-06-28",
    issue: "Output voltage unstable, fluctuates between 28V and 32V",
    severity: "high",
    status: "under-repair",
    description: "Power supply not maintaining stable voltage output. Needs recalibration or component replacement."
  },
  {
    id: 202,
    equipmentId: 2,
    equipmentName: "Multimeter",
    reportedBy: "Priya V",
    reportDate: "2026-06-25",
    issue: "Display flickering intermittently",
    severity: "medium",
    status: "resolved",
    description: "Display issue resolved by replacing battery and cleaning contacts."
  },
  {
    id: 203,
    equipmentId: 5,
    equipmentName: "Logic Analyzer",
    reportedBy: "Karthikeyan S",
    reportDate: "2026-06-27",
    issue: "One channel not responding",
    severity: "medium",
    status: "pending-review",
    description: "Channel 15 shows no response. Needs investigation and possible firmware update."
  }
];

export const MOCK_USERS = [
  {
    id: 1,
    name: "Karthikeyan S",
    email: "student@lab.com",
    role: "STUDENT",
    regNo: "717824226",
    dept: "Information Technology",
    year: "2nd Year",
    phone: "+91 98765 43210",
    joinDate: "2024-06-15"
  },
  {
    id: 2,
    name: "Dr. Priya R",
    email: "faculty@lab.com",
    role: "FACULTY",
    regNo: "FAC001",
    dept: "Electronics",
    specialization: "Digital Systems",
    phone: "+91 99876 54321",
    joinDate: "2020-01-10"
  },
  {
    id: 3,
    name: "Admin User",
    email: "admin@lab.com",
    role: "ADMIN",
    regNo: "ADM001",
    dept: "Administration",
    phone: "+91 97654 32109",
    joinDate: "2019-01-01"
  }
];

export const STATS = {
  totalEquipment: MOCK_EQUIPMENT.length,

  availableEquipment: MOCK_EQUIPMENT.filter(
    (e) => e.status === "available"
  ).length,

  inUseEquipment: MOCK_EQUIPMENT.filter(
    (e) => e.status === "in-use"
  ).length,

  maintenanceEquipment: MOCK_EQUIPMENT.filter(
    (e) => e.status === "maintenance"
  ).length,

  totalBookings: MOCK_BOOKINGS.length,

  confirmedBookings: MOCK_BOOKINGS.filter(
    (b) => b.status === "confirmed"
  ).length,

  pendingApprovals: MOCK_BOOKINGS.filter(
    (b) => b.status === "pending"
  ).length,

  completedBookings: MOCK_BOOKINGS.filter(
    (b) => b.status === "completed"
  ).length,

  totalFaults: MOCK_FAULTS.length,

  faultsPending: MOCK_FAULTS.filter(
    (f) => f.status === "pending-review"
  ).length,

  faultsResolved: MOCK_FAULTS.filter(
    (f) => f.status === "resolved"
  ).length,

  faultsUnderRepair: MOCK_FAULTS.filter(
    (f) => f.status === "under-repair"
  ).length,

  maintenanceAccuracy: "95%",

  averageDowntime: "2.3 Hours",
};
