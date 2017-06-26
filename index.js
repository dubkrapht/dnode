'use strict'

var Hapi = require('hapi');
var Routes = require('./routes.js');
var server = new Hapi.Server();

server.connection({port: 3000, host: 'localhost'});

server.route(Routes.endpoints);

server.start((err) => {
    if(err) {
	    throw err;
    }

    console.log('Listening to ' + server.info.uri);
});
