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
  twitter: { // OAUTH1
    scheme: 'bell',
    config: {
      provider: 'twitter',
      password: process.env.TWITTER_STRATEGY_PASSWORD,
      clientId: process.env.TWITTER_API_KEY,
      clientSecret: process.env.TWITTER_API_SECRET,
      isSecure: false, // for local development
    },
  },
  twitterV2: { // OAUTH2
    scheme: 'bell',
    config: {
      provider: {
        protocol: 'oauth2',
        auth: '/auth/twitterv2/auth',
        token: '/auth/twitterv2/token',
      },
      isSecure: false,
      clientId: process.env.TWITTER_API_KEY,
      clientSecret: process.env.TWITTER_API_SECRET,
      password: process.env.TWITTER_STRATEGY_PASSWORD,
    },
  },
  session: {
    scheme: 'cookie',
    config: {
      cookie: {
        name: 'dnode-cookie',
        password: '4321',
        isSecure: false,
      },
      redirectTo: '/auth/twitter',
    },
  },
};
