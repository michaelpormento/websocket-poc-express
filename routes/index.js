const express = require("express");
const { io } = require("../socketServer");
const router = express.Router();

io.on("connection", function (socket) {
  socket.on("agnostic data sender", function (msg) {
    io.emit("agnostic data sender", msg);
  });
});

// Homepage
// TODO: move index.htm path outside router
router.get("/", function (req, res, next) {
  res.sendFile(__dirname + "/index.htm");
});

module.exports = router;
