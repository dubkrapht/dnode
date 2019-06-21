const Server = require('./server');

(async () => {
  const server = await Server.init();
  server.start();
})().catch((err) => {
  // TODO add loggin service
  // eslint-disable-next-line
  console.log(err);
});
