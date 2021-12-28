const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
    
})

server.listen(5000, () => {
    console.log("Socket ready")
})