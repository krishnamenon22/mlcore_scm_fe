/* eslint-disable import/no-extraneous-dependencies */
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const socketIo = require("socket.io");

// const server = express();
const app = express();

const multer = require("multer");
const http = require("http");

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const upload = multer();
const router = jsonServer.router("./mock_server/db.json");
const db = JSON.parse(fs.readFileSync("./mock_server/db.json", "UTF-8"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(jsonServer.defaults());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.static("public"));

let interval;

const emitUpdatedTrips = socket => {
  const response = [1, 2, 3, 4];
  socket.emit("UpdatedTripIds", response);
};

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => emitUpdatedTrips(socket), 30000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});


app.get("/api/inbound_metrics", (req, res) => {
  res.status(200).json(db.inbound_metric_cards_data);
});

app.get("/api/stages", (req, res) => {
  res.status(200).json(db.stages_data);
});

app.get("/api/inbound_trips", (req, res) => {
  res.status(200).json(db.inbound_data);
});

app.get("/api/inbound_trip_stages", (req, res) => {
  res.status(200).json(db.inbound_trip_stages_data);
});

app.use(router);

server.listen(8080, () => {
  console.log("Run Auth API Server");
});
