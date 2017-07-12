var Mongoose = require('mongoose');
var Config = require('./config');

Mongoose.connect('mongodb://localhost/dnode');
var db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected to dnode');
});

exports.Mongoose = Mongoose;
exports.db = db;