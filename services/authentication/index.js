const jwt = require('jsonwebtoken');

module.exports = {
  signToken: user => jwt.sign(user, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: 60 * 15,
  }),
};
