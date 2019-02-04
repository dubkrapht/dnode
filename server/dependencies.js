const { sendMail } = require('./mail');

module.exports = async (server) => {
  // add to global server app space
  server.app.sendMail = sendMail;
  // add other dependencies like db models and such
  return server;
};
