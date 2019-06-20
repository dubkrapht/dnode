require('dotenv').config();

const config = require('./config');
const dependencyContainer = require('./dependencies');
const routes = require('./routes');
const plugins = require('./plugins');
const strategies = require('./strategies');

const Server = require('./Server');

module.exports = {
  init: async () => {
    try {
      const server = new Server({
        config, dependencyContainer, routes, plugins, strategies,
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
};
