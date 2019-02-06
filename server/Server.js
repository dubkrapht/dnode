const Hapi = require('hapi');

class Server {
  constructor({
    config, dependencies, routes, plugins, strategies,
  }) {
    this.config = config;
    this.dependencies = dependencies;
    this.routes = routes;
    this.plugins = plugins;
    this.strategies = strategies;
    this.server = Hapi.server(config);
  }

  async loadDependencies() {
    Object.keys(this.dependencies).forEach((key) => {
      this.server.app[key] = this.dependencies[key];
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
