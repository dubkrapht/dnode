const bcrypt = require('bcrypt');
// TODO maybe rewrite this file into separate modules?
module.exports = {
  jwt: {
    scheme: 'jwt',
    config: {
      key: process.env.JWT_SECRET,
      verifyOptions: {
        algorithms: ['HS256'],
      },
      validate: async (decoded, request) => {
        try {
          const { username } = decoded;
          const user = await request.models.users.findOne({ username: decoded.username });
          if (!user) {
            return { credentials: null, isValid: false };
          }
          const credentials = { id: user.id, username: user.username };
          const isValid = username !== user.username;
          return { isValid, credentials };
        } catch (err) {
          throw err;
        }
      },
    },
  },
  simple: {
    scheme: 'basic',
    config: {
      validate: async (request, username, password) => {
        try {
          const user = await request.models.users.findOne({ username });
          if (!user) {
            return { credentials: null, isValid: false };
          }
          const credentials = { id: user.id, username: user.username };
          const isValid = await bcrypt.compare(password, user.password);
          return { isValid, credentials };
        } catch (err) {
          throw err;
        }
      },
    },
  },
  twitter: {
    scheme: 'bell',
    config: {
      provider: 'twitter',
      password: '1234', // TODO set to a secure password
      clientId: process.env.TWITTER_API_KEY, // TODO decide what to do when these are not supplied
      clientSecret: process.env.TWITTER_API_SECRET,
      isSecure: false, // for local development
    },
  },
};
