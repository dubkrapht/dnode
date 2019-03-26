// TODO is it better to load them by reading each component route file?

const user = require('../components/User/user.router');
const authentication = require('../components/Authentication/authentication.router');

module.exports = [
  ...user,
  ...authentication,
];
