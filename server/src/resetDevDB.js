const config = require('./config.js');
const io = require('socket.io')();

const mongo = require('mongodb').MongoClient;
const url = "mongodb://" + config.dbAddress + "/dev_Chatziki";

mongo.connect(url, function (err, db) {
  if (err) throw err;
  db.dropDatabase().then((result) => {
    console.log("drop database: " + result);
  });
});

mongo.connect(url, function (err, db) {

  db.collection("users").insert({
    username: "test1",
    password: "pass",
    admin: true
  }).then((result) => {
    console.log("add user 1: " + JSON.stringify(result));
  });
  db.collection("users").insert({
    username: "test2",
    password: "pass",
    admin: true
  }).then((result) => {
    console.log("add user 2: " + JSON.stringify(result));
  });
  db.collection("users").insert({
    username: "test3",
    password: "pass",
    admin: false
  }).then((result) => {
    console.log("add user 3: " + JSON.stringify(result));
  });
  db.collection("users").insert({
    username: "test4",
    password: "pass",
    admin: false
  }).then((result) => {
    console.log("add user 4: " + JSON.stringify(result));
  }).then(() => {
    db.collection("users").find()
      .toArray((err, result) => {
        console.log("Users: " + JSON.stringify(result));
      });
  });

  db.collection("channel_general").insert({
    senderId: "0",
    timestamp: new Date(),
    content: "Yo Dawg, from DB!"
  }).then((result) => {
    console.log("add 1st message to general: " + JSON.stringify(result));
  }).then(() => {
    db.collection("channel_general").find()
      .toArray((err, result) => {
        console.log("Channel general messages: " + JSON.stringify(result));
      });
  });
});