const jwtAuth = require('hapi-auth-jwt2');
const basicAuth = require('@hapi/basic');
const bellAuth = require('@hapi/bell');
const good = require('@hapi/good');

const goodOptions = {
  ops: {
    interval: 1000,
  },
  reporters: {
    consoleReporter: [
      {
        module: '@hapi/good-squeeze',
        name: 'Squeeze',
        args: [{ log: '*', response: '*', request: '*' }],
      },
      {
        module: '@hapi/good-console',
      },
      'stdout',
    ],
  },
};

module.exports = [
  jwtAuth,
  basicAuth,
  bellAuth,
  {
    plugin: good,
    options: goodOptions,
  },
  // TODO add different auth strategies, hapi swagger etc.
];
