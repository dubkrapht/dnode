class Strategies {
  constructor(server) {
    this.server = server;
  }

  /**
   * Injects Authentication Strategies to server object
   */
  async createStrategies() {
    // create JWT Strategy
    this.server.auth.strategy('jwt', 'jwt', {
      key: process.env.JWT_SECRET,
      validate: this._validateJwtAuth,
      verifyOptions: { algorithms: ['HS256'] },
    });
    // add others like basic username - password
  }

  /**
   * Validates an incoming request for JWT Auth
   * @param {Object} decoded
   * @param {Object} request
   */
  async _validateJwtAuth(decoded, request) {
    try {
      const user = await request.models.users.findOne({ username: decoded.username });
      if (!user) {
        return { isValid: false };
      }
      if (decoded.username !== user.username) {
        return { isValid: false };
      }
      return { isValid: true };
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Strategies;
