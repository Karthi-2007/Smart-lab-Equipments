const bookings = [
  { id: "BK-2401", user: "Karthikeyan S", equipment: "Digital Oscilloscope", date: "Jul 01, 2026", status: "Approved" },
  { id: "BK-2402", user: "Hariharan A", equipment: "Arduino Uno Kit", date: "Jul 01, 2026", status: "Pending" },
  { id: "BK-2403", user: "Premnath P", equipment: "3D Printer", date: "Jul 02, 2026", status: "Pending" },
];

export async function getBookings() {
  return bookings;
}

export async function createBooking(payload) {
  return {
    id: `BK-${Date.now()}`,
    status: "Pending",
    ...payload,
  };
}

export async function updateBookingStatus(id, status) {
  return { id, status };
}
