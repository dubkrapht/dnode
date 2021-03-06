const Hapi = require('@hapi/hapi');

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
    this.NODE_ENV = process.env.NODE_ENV;
  }

  async loadDependencies() {
    const dependencies = this.dependencyContainer.cradle;
    Object.keys(dependencies).forEach((key) => {
      this.server.app[key] = dependencies[key];
    });
  }

  decorateRequest() {
    this.server.ext({
      type: 'onRequest',
      method: (request, h) => {
        request.app = this.server.app;
        return h.continue;
      },
    });
    this.server.ext({
      type: 'onPreResponse',
      method: (request, h) => {
        if (this.NODE_ENV === 'development') {
          console.log(request.response);
        }
        return h.continue;
      },
    });
  }

  async registerAuthStrategies() {
    // TODO decide which one is default
    Object.keys(this.strategies).forEach((strategy) => {
      this.server.auth.strategy(strategy, this.strategies[strategy].scheme, this.strategies[strategy].config);
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
