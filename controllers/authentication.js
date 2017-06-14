// var User = require('../models/user').User;

exports.register = {
    handler: function(request, reply) {
        reply(request.payload.email);
    }
}