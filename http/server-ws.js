// Import the 'ws' package
const WebSocket = require("ws");

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 6432 }); // You can change the port number

// When a client connects to the WebSocket server
wss.on("connection", (ws) => {
  console.log("Client connected");

  // Send a welcome message to the client
  ws.send("Welcome to the WebSocket server!");

  // Listen for messages from the client
  ws.on("message", (message) => {
    console.log("Received: " + message);

    // Respond back to the client with the received message
    ws.send("You said: " + message);
  });

  // Handle the client closing the connection
  ws.on("close", () => {
    console.log("Client disconnected");
  });

  // Handle errors
  ws.on("error", (error) => {
    console.error("WebSocket error: " + error);
  });
});

console.log("WebSocket server is running on ws://localhost:6432");
