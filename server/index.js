require('dotenv').config();

const Hapi = require('hapi');
const serverConfig = require('./config');
const injectDependencies = require('./dependencies');

module.exports = {
  load: async () => {
    try {
      let server = Hapi.server(serverConfig);
      // load dependencies
      server = await injectDependencies(server);
      // load routes
      return server;
    } catch (err) {
      throw err;
    }
  },
  start: async (server) => {
    try {
      await server.start();
      console.log(`Server running at: ${server.info.uri}`);
    } catch (err) {
      throw err;
    }
  },
};
