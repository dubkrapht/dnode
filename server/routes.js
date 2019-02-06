// TODO is it better to load them by reading each component route file?

const user = require('../components/User/user.router');

module.exports = [
  ...user,
];
