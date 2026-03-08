// Placeholder for TTS service call
async function textToSpeech(text) {
  // In real setup, call a TTS engine
  return Buffer.from(`AUDIO:${text}`);
}

module.exports = { textToSpeech };
