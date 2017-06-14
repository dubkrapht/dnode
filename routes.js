var Pages = require('./controllers/pages');
var Authentication = require('./controllers/authentication')

exports.endpoints = [
    {method: 'GET', path: '/', config: Pages.index},
    {method: 'GET', path: '/login', config: Pages.login},
    // {method: 'GET', path: 'register', config: Pages.register},
    // {method: 'POST', path: '/login', config: Authentication.login},
    // {method: 'GET', path: '/logout', config: Authentication.logout},
    // {method: 'POST', path: '/register', config: Authentication.register}
]