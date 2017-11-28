const io = require('socket.io')();

const port = 8000;
io.listen(port);
console.log('listening on port ', port);

io.on('connection', (socket) => {
    console.log("received connection");
    socket.join('general');
    io.emit('success');
    io.to('general').emit('message', {
        key: 0,
        channel: "general",
        user: "rand",
        timestamp: new Date(),
        content: "Yo dawg!"
    });
});