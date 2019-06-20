const Server = require('./server');

(async () => {
  const server = await Server.init();
  server.start();
})().catch((err) => {
  // TODO add loggin service
  console.log(err);
});
