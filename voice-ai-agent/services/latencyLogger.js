// Logs latency for each pipeline stage
function logLatency(stage, startTime) {
  const elapsed = Date.now() - startTime;
  console.log(`${stage} latency: ${elapsed} ms`);
}

module.exports = { logLatency };
