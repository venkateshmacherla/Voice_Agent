// Handles short-lived session data (e.g., conversation context)
const sessions = new Map();

function setSession(sessionId, data) {
  sessions.set(sessionId, { data, timestamp: Date.now() });
}

function getSession(sessionId) {
  return sessions.get(sessionId);
}

function clearSession(sessionId) {
  sessions.delete(sessionId);
}

module.exports = { setSession, getSession, clearSession };
