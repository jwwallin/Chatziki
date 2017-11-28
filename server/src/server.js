const io = require('socket.io')();

const port = 8000;
io.listen(port);
console.log('listening on port ', port);

io.on('connection', (socket) => {
    console.log("received connection");
    socket.join('room');
    io.emit('success');
    io.to('room').emit('message', "Yo dawg!");
});

