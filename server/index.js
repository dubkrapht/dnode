require('dotenv').config();

const config = require('./config');
const dependencies = require('./dependencies');
const routes = require('./routes');
const plugins = require('./plugins');
const strategies = require('./strategies');

const Server = require('./Server');

module.exports = {
  init: async () => {
    try {
      const server = new Server({
        config, dependencies, routes, plugins, strategies,
      });
      await server.registerPlugins();
      await server.loadDependencies();
      await server.registerAuthStrategies();
      server.registerRoutes();
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
