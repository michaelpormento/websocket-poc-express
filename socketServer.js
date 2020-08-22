const socketIo = require("socket.io");
const io = socketIo();
const socketServer = {};

socketServer.io = io;

io.on("connection", function (socket) {
  console.log("A connection has been made.");
  socket.on("disconnect", () => {
    console.log("A connection has been disconected.");
  });
});

io.on("connection", (socket) => {
  const channelName = "agnostic data sender";
  socket.on(channelName, (msg) => {
    console.log(`Received message from channel "${channelName}" : ${msg}`);
  });
});

module.exports = socketServer;
