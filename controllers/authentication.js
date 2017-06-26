var Joi = require('joi');
var Database = require('../db/dbconnect');
// var User = require('../models/user').User;

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
            reply(request.payload.password);
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