const io = require('socket.io')();

const port = 8000;
io.listen(port);
console.log('listening on port ', port);

io.on('connection', (socket) => {
    console.log("received connection");
    socket.join('general');
    io.emit('init', {
        user: {
            id: 0,
            name: "rand",
            admin: false
        },
        users: [], 
        channels:[
            {
                key: 0,
                name: "general",
                messages: [
                ]
            }
        ]
    });
    io.to('0').emit('message', {
        key: 0,
        channel: 0,
        user: 0,
        timestamp: new Date(),
        content: "Yo dawg!"
    });
    socket.on('message', (data) => {
        let user = ""; //read user from DB using socket.handshake.decoded_token.email
        let message = {
            channel: data.channel,
            user: user,
            timestamp: new Date(),
            content: data.text
        };
        //save to database
        //read from database
        io.to(message.channel).emit(message);
    });
});