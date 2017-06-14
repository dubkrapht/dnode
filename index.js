'use strict'

var Hapi = require('hapi');
var Routes = require('./routes.js');
var server = new Hapi.Server();

server.connection({port: 3000, host: 'localhost'});

//debuging the next request
server.ext('onRequest', function(request, next) {
    console.log(request.path, request.query);
    next();
});

server.route(Routes.endpoints);

server.start((err) => {
    if(err) {
	    throw err;
    }

    console.log('Listening to ' + server.info.uri);
});
