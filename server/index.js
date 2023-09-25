const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

app.use(cors())

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

io.on('connection', (socket) => {
    socket.emit('me', socket.id);

    socket.on('disconnect', () => {
        socket.broadcast.emit('call ended');
    })

    socket.on('calluser', ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit("calluser", { signal: signalData, from, name })
    })

    socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", data.signal);
    })
})

server.listen(4000, () => {
    console.log('Running on PORT 4000');
})