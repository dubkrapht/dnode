const moment = require('moment');
const {
  mailService,
  authenticationService,
} = require('../services');

module.exports = {
  sendMail: mailService.sendMail,
  authenticationService,
  moment,
};
