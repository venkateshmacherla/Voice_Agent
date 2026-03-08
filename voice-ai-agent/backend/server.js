const express = require("express");
const http = require("http");
const routes = require("./routes");
const initWebSocket = require("./websocket");

const app = express();
app.use(express.json());
app.use("/api", routes);

const server = http.createServer(app);
initWebSocket(server);

server.listen(3000, "0.0.0.0", () => {
  console.log("Backend running on http://0.0.0.0:3000");
});