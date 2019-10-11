const Server = require('./server');

(async () => {
  const server = await Server.init();
  // only for development
  server.server.events.on('request', (request, event) => {
    // console.log(request, 'R');
    // console.log(event, 'E');
  });
  server.start();
  console.log(`Server accepting requests on ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
})().catch((err) => {
  // TODO add loggin service
  // eslint-disable-next-line
  console.log(err);
});
