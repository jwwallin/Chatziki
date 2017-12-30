const config = require('./config.js');
const io = require('socket.io')();

const mongo = require('mongodb').MongoClient;
const url = "mongodb://" + config.dbAddress + "/dev_Chatziki";

mongo.connect(url, (err, db) => {
  if (err) throw err;
  console.log("Database connected!");

  const port = 8000;
  io.listen(port);
  console.log('listening on port ', port);

  io.on('connection', (socket) => {
    console.log("received connection");
    socket.join('general');

    //received events
    socket.on('action', (action) => {
      switch (action.type) {
        case 'message':
          let user = ""; //read user from DB using socket.handshake.decoded_token.email
          let action = {
            type: 'message',
            channel: data.channel,
            message: {
              user: user,
              timestamp: new Date(),
              content: data.text
            }
          };
          //save to database
          //read from database
          io.to(action.message.channel).emit('action', action);
          break;

        default:
          break;
      }
    });

    // emits
    socket.emit('action', {
      type: 'init',
      data: {
        user: {
          id: 1,
          name: "rand",
          admin: false
        },
        users: {
          "132": {
            name: "username2"
          }
        },
        channels: {
          "general": {
            messages: {
            }
          }
        }
      }
    });
    db.collection("channel_general").findOne({}, { 'sort':  [['timestamp', -1]] }, (error, message) => {
      if (error) { throw error };

      console.log(message);
    io.to('general').emit('action', {
      type: 'message',
      channel: "general",
        key: message._id,
      message: {
          senderId: message.senderId,
          timestamp: message.timestamp,
          content: message.content
      }
    });
  });
  });

});