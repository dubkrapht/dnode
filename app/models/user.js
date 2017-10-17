var Mongoose = require('../db/dbconnect').Mongoose;
var passportLocalMongoose = require('passport-local-mongoose');

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

userSchema.plugin(passportLocalMongoose, { usernameField: 'email', hashField: 'password', usernameLowerCase: true });  

var User = Mongoose.model('User', userSchema, 'Users');

exports.User = User;