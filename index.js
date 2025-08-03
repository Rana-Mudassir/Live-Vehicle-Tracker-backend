const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const mongoose = require("mongoose");
const VehicleLocation = require('./models/VehicleLocation');

mongoose
  .connect("mongodb+srv://mudassirnazird22:1234@googlemap.llxyt9d.mongodb.net/vehicle-tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

const io = new Server(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  // Send updates for 3 fake vehicles
  const interval = setInterval(() => {
  const vehicleList = ['V-001', 'V-002', 'V-003'];

  vehicleList.forEach(async id => {
    const lat = 33.6844 + Math.random() * 0.05;
    const lng = 73.0479 + Math.random() * 0.05;

    const fakeVehicle = {
      id,
      lat,
      lng,
    };

    // 🔴 Send to frontend
    socket.emit('vehicleLocation', fakeVehicle);

    // 🟢 Save to MongoDB
    const entry = new VehicleLocation({
      vehicleId: id,
      lat,
      lng,
    });

    try {
      await entry.save();
      console.log(`📦 Saved: ${id}`);
    } catch (err) {
      console.error('❌ DB Save Error:', err.message);
    }
  });
}, 3000);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
    clearInterval(interval);
  });
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
