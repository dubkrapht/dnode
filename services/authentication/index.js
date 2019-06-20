const jwt = require('jsonwebtoken');

class AuthenticationService {
  constructor(opts) {
    this.opts = opts;
  }

  signToken(user) {
    return jwt.sign(user, process.env.JWT_SECRET, {
      algorithm: 'HS256',
      expiresIn: 60 * 15,
    });
  }
}

module.exports = AuthenticationService;
