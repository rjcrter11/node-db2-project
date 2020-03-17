const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send("<h2>Cars Server</h2>");
});

module.exports = server;
