const UserController = require('./user.controller');

const handler = new UserController();

module.exports = [
  {
    method: 'GET',
    path: '/users',
    config: {
      auth: false,
      description: 'Get all users',
      // validations
      handler: handler.get,
    },
  },
];
