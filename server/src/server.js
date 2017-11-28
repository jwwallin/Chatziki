const io = require('socket.io')();

const port = 8000;
io.listen(port);
console.log('listening on port ', port);

io.on('connection', (message) => {
    console.log("received connection");


    io.emit('success', {
        //send username and blah blah
    });
  });