// Import required modules
const https = require("https");
const fs = require("fs");
const WebSocket = require("ws");

// Read the SSL certificate and private key
const serverOptions = {
  key: fs.readFileSync("wss-cert/private-key.pem"), // Replace with the path to your private key
  cert: fs.readFileSync("wss-cert/certificate.pem"), // Replace with the path to your certificate
};

// Create an HTTPS server
const server = https.createServer(serverOptions, (req, res) => {
  res.writeHead(200);
  res.end("Secure WebSocket server");
});

// Create a WebSocket server on top of the HTTPS server
const wss = new WebSocket.Server({ server });

// Handle WebSocket connections
wss.on("connection", (ws, req) => {
  console.log(`Client connected ${req.socket.remoteAddress}`);

  // Send a welcome message to the client
  ws.send("Welcome to the secure WebSocket server!");

  // Listen for messages from the client
  ws.on("message", (message) => {
    console.log("Received: " + message);
    // Echo the message back to the client
    ws.send("You said: " + message);
  });

  // Handle client disconnect
  ws.on("close", () => {
    console.log("Client disconnected");
  });

  ws.on("tlsClientError", (err, socket) => {
    console.error("TLS error:", err.message);
  });

  // Handle WebSocket errors
  ws.on("error", (error) => {
    console.error("WebSocket error: " + error);
  });
});

// Start the server on port 6432 (or any other port you prefer)
server.listen(6432, () => {
  console.log("Secure WebSocket server running at wss://localhost:6432");
});
