require('dotenv').config();

const config = require('./config');
const dependencies = require('./dependencies');
const plugins = require('./plugins');
const strategies = require('./strategies');

const Server = require('./Server');

module.exports = {
  init: async () => {
    try {
      const server = new Server({
        config, dependencies, routes: null, plugins, strategies,
      });
      await server.registerPlugins();
      await server.loadDependencies();
      await server.registerAuthStrategies();
      return server;
    } catch (err) {
      throw err;
    }
  },
  start: async (server) => {
    try {
      await server.start();
    } catch (err) {
      throw err;
    }
  },
};
