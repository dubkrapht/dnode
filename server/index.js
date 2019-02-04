require('dotenv').load();

const Hapi = require('hapi');

const server = Hapi.server(require('./config'));

module.exports = {
  start: async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  },
};
