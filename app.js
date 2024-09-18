const express = require("express");
const socket = require("socket.io");

const app = express(); //initialize and server ready

app.use(express.static("public"));

let port = 3000;
let server = app.listen(port, () => {
  console.log("listing to port " + port);
});

let io = socket(server);
io.on("connection", (socket) => {
  console.log("Made socket connnection");

  socket.on("beginPath", (data) => {
    // now transfer data to all connected computer
    io.socket.emit("beginPath", data);
  });

  socket.on("drawStroke", (data) => {
    io.socket.emit("drawStroke", data);
  });
  
  socket.on("redoUndo", (data) => {
    io.socket.emit("redoUndo", data)
  })

});

