module.exports = [
  {
    method: 'GET',
    path: '/users',
    config: {
      auth: false,
      description: 'Get all users',
      // validations
      handler: async (request, h) => { return 'ok' },
    },
  },
];
