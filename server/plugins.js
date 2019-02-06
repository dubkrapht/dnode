const jwtAuth = require('hapi-auth-jwt2');

module.exports = [
  jwtAuth,
  // TODO add different auth strategies, hapi swagger etc.
];
