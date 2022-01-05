const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require('socket.io')(server, {
    cors: {origin : "*"}
});

io.on('connection', (socket) => {
    const idHandShake = socket.id;

    console.log(`Hi ${idHandShake} user`);

    socket.on('disconnect', () => {
        console.log(`${socket.id} user is now disconnected!`);
    });
})

server.listen(3000, function () {
    console.log('\n')
    console.log(`>> Socket listo y escuchando por el puerto: 3000`)
})
