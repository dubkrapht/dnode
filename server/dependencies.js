const {
  asClass,
  asValue,
  createContainer,
  Lifetime,
} = require('awilix');

const moment = require('moment');
const {
  mailService,
  authenticationService,
} = require('../services');

const container = createContainer();
container.register({
  sendMail: asValue(mailService.sendMail),
  authenticationService: asClass(authenticationService, { lifetime: Lifetime.SINGLETON }),
  moment: asValue(moment),
});

module.exports = container;
