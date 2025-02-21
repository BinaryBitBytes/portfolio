const express = require("express");
const path = require("path");
const { createServer } = require("http"); // Required for socket.io
const socketIo = require("socket.io");

const app = express();
const port = process.env.PORT || 5001;

// Create HTTP server
const server = createServer(app);
const io = socketIo(server); // Attach socket.io to the server

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, "build")));

// Serve the React application for all requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

// WebSocket connection handling
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
