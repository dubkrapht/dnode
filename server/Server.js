const Hapi = require('hapi');

class Server {
  constructor({
    config, dependencyContainer, routes, plugins, strategies,
  }) {
    this.config = config;
    this.dependencyContainer = dependencyContainer;
    this.routes = routes;
    this.plugins = plugins;
    this.strategies = strategies;
    this.server = Hapi.server(config);
  }

  async loadDependencies() {
    const dependencies = this.dependencyContainer.cradle;
    Object.keys(dependencies).forEach((key) => {
      this.server.app[key] = dependencies[key];
    });
    this.server.ext({
      type: 'onRequest',
      method: (request, h) => {
        request.app = this.server.app;
        return h.continue;
      },
    });
  }

  async registerAuthStrategies() {
    Object.keys(this.strategies).forEach((strategy) => {
      this.server.auth.strategy(strategy, strategy, {
        key: process.env.JWT_SECRET,
        validate: this.strategies[strategy],
        verifyOptions: strategy === 'jwt' ? { algorithms: ['HS256'] } : null,
      });
    });
  }

  async registerPlugins() {
    await this.server.register(this.plugins);
  }

  registerRoutes() {
    this.server.route(this.routes);
  }

  async start() {
    try {
      await this.server.start();
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Server;
