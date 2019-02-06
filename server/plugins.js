const jwtAuth = require('hapi-auth-jwt2');
const good = require('good');

const goodOptions = {
  ops: {
    interval: 1000,
  },
  reporters: {
    consoleReporter: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ log: '*', response: '*', request: '*' }],
      },
      {
        module: 'good-console',
      },
      'stdout',
    ],
  },
};

module.exports = [
  jwtAuth,
  {
    plugin: good,
    options: goodOptions,
  },
  // TODO add different auth strategies, hapi swagger etc.
];
