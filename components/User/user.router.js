const handle = require('./user.controller');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    config: {
      auth: false,
      description: 'Get all users',
      // validations
      handler: handle.get,
    },
  },
];
