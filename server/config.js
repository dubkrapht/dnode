module.exports = {
  port: process.env.SERVER_PORT || 8000,
  host: process.env.SERVER_HOST || localhost,
  routes: {
    cors: {
      origin: ['*'],
      additionalExposedHeaders: ['jwt'],
      headers: ['Accept', 'Authorization', 'Content-Type', 'jwt'],
    },
  },
};
