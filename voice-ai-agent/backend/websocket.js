const { WebSocketServer } = require("ws");

function initWebSocket(server) {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.on("message", async (message) => {
      const start = Date.now();

      try {
        const sttResp = await fetch("http://localhost:5000/stt", {
          method: "POST",
          body: message
        });
        const text = await sttResp.text();

        const llmResp = await fetch("http://localhost:5000/agent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text })
        });
        const response = await llmResp.text();

        const ttsResp = await fetch("http://localhost:5000/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: response })
        });
        const audio = await ttsResp.arrayBuffer();

        ws.send(Buffer.from(audio));
        console.log(`Latency: ${Date.now() - start} ms`);
      } catch (err) {
        console.error("WebSocket error:", err);
        ws.send("Error processing request");
      }
    });
  });
}

module.exports = initWebSocket;
