const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const port = 9000;

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// Serve static files from the public folder
app.use(express.static(path.resolve("./public")));

// Serve the main HTML file
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

// Handle Socket.IO connections
io.on("connection", (socket) => {
  console.log("User connected", socket.id);

  // Listen for chat messages from clients
  socket.on("chat message", (msg) => {
    // Broadcast the message to all connected clients
    io.emit("chat message", msg);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

// Start the server
server.listen(port, () => console.log(`Server started at port: ${port}`));
