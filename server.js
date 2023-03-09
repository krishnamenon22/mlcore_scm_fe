/* eslint-disable import/no-extraneous-dependencies */
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");

const server = express();
const multer = require("multer");

const upload = multer();
const router = jsonServer.router("./mock_server/db.json");
const db = JSON.parse(fs.readFileSync("./mock_server/db.json", "UTF-8"));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(jsonServer.defaults());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(upload.array());
server.use(express.static("public"));


server.get("/api/inbound_metrics", (req, res) => {
  res.status(200).json(db.inbound_metric_cards_data);
});

server.get("/api/stages", (req, res) => {
  res.status(200).json(db.stages_data);
});

server.get("/api/inbound_trips", (req, res) => {
  res.status(200).json(db.inbound_data);
});

server.get("/api/inbound_trip_stages", (req, res) => {
  res.status(200).json(db.inbound_trip_stages_data);
});

server.use(router);

server.listen(8080, () => {
  console.log("Run Auth API Server");
});
