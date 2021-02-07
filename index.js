const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('src'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    
    socket.on('move', (pos) => {
        console.log(pos);
        socket.broadcast.emit('move', pos);
    });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});