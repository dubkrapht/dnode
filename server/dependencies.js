const moment = require('moment');
const { mailService } = require('../services');

module.exports = {
  sendMail: mailService.sendMail,
  moment,
};
