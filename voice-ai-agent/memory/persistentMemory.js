// Handles longer-term patient data (could be swapped with Redis/DB later)
const patients = new Map();

function setPatient(patientId, data) {
  patients.set(patientId, data);
}

function getPatient(patientId) {
  return patients.get(patientId);
}

function getAllPatients() {
  return Array.from(patients.entries());
}

module.exports = { setPatient, getPatient, getAllPatients };
