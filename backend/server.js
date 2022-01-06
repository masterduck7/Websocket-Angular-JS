const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require('socket.io')(server, {
    cors: {origin : "*"}
});

io.on('connection', (socket) => {
    const idHandShake = socket.id;
    const { nameRoom } = socket.handshake.query;

    socket.join(nameRoom)

    console.log(`User ${idHandShake} -> ${nameRoom}`);

    socket.on('disconnect', () => {
        console.log(`User ${socket.id} disconnected -> ${nameRoom}`);
    });
})

server.listen(3000, function () {
    console.log('\n')
    console.log(`>> Socket listo y escuchando por el puerto: 3000`)
})
