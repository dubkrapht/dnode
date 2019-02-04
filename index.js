const Server = require('./server');

(async () => {
  const server = await Server.load();
  await Server.start(server);
})().catch((err) => {
  // TODO add loggin service
  console.log(err);
});
