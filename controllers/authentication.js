var Joi = require('joi');
var User = require('../models/user').User;

module.exports = {
    register: {
        validate: {
            payload: {
                email: Joi.string().email().required(),
                password: Joi.string().required(),
                password_repeat: Joi.string().required()
            }
        },
        handler: (request, reply) => {
            var newUser = new User({
                email: request.payload.email
            });

            User.register(newUser, request.payload.password, (err, user) => {
                if(err) {
                    return reply(err);
                }

                console.log('registered');
                return reply.redirect('/login');
            });
        }
    },
    login: {
        validate: {
            payload: {
                email: Joi.string().email().required(),
                password: Joi.string().required()
            }
        }
    }
}