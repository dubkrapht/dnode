const Server = require('./server');

(async () => {
  await Server.start();
})().catch((err) => {
  // TODO add loggin service
  console.log(err);
});
