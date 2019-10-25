const AuthenticationController = require('./authentication.controller');

const handler = new AuthenticationController();

module.exports = [
  {
    method: 'POST',
    path: '/login',
    config: {
      auth: false,
      description: 'Get JWT',
      handler: handler.login,
    },
  },
  {
    method: ['GET', 'POST'],
    path: '/auth/twitter',
    config: {
      auth: 'twitter',
      handler: handler.twitter,
    },
  },
];
