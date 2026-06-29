export const equipmentCatalog = [
  { id: 1, name: "Digital Oscilloscope", category: "Electronics Lab", status: "Available", location: "Block A - Room 101" },
  { id: 2, name: "Function Generator", category: "Electronics Lab", status: "Available", location: "Block A - Room 101" },
  { id: 3, name: "Digital Multimeter", category: "Electrical Lab", status: "Booked", location: "Block A - Room 102" },
  { id: 4, name: "DC Power Supply", category: "Electrical Lab", status: "Available", location: "Block A - Room 102" },
  { id: 5, name: "Arduino Uno Kit", category: "Embedded Systems Lab", status: "Available", location: "Block B - Room 201" },
  { id: 6, name: "Raspberry Pi 4", category: "IoT Lab", status: "Booked", location: "Block B - Room 202" },
  { id: 7, name: "PLC Trainer Kit", category: "Automation Lab", status: "Available", location: "Block C - Room 301" },
  { id: 8, name: "3D Printer", category: "Manufacturing Lab", status: "Maintenance", location: "Block C - Room 302" },
];

export async function getEquipmentList() {
  return equipmentCatalog;
}

export async function getEquipmentById(id) {
  return equipmentCatalog.find((item) => item.id === Number(id)) || null;
}

export async function getEquipmentStats() {
  return {
    total: equipmentCatalog.length,
    available: equipmentCatalog.filter((item) => item.status === "Available").length,
    booked: equipmentCatalog.filter((item) => item.status === "Booked").length,
    maintenance: equipmentCatalog.filter((item) => item.status === "Maintenance").length,
  };
}
