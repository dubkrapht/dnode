const jwtAuth = require('hapi-auth-jwt2');
const basicAuth = require('@hapi/basic');
const sessionAuth = require('@hapi/cookie');
const bellAuth = require('@hapi/bell');
const good = require('@hapi/good');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');

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

const swaggerOptions = {
  info: {
    title: 'DNODE API DOCUMENTATION',
    version: '0.1',
  },
};

module.exports = [
  jwtAuth,
  basicAuth,
  bellAuth,
  sessionAuth,
  {
    plugin: good,
    options: goodOptions,
  },
  Inert,
  Vision,
  {
    plugin: HapiSwagger,
    options: swaggerOptions,
  },
];
