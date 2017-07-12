var Mongoose = require('../dbconnect').Mongoose;

var userSchema = new Mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

var User = Mongoose.mode('User', userSchema, 'Users');

exports.User = User;