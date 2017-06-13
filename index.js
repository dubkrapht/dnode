'use strict'

var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({port: 3000, host: 'localhost'});

//debuging the next request
server.ext('onRequest', function(request, next) {
    console.log(request.path, request.query);
    next();
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
	    reply('Hello root');
    }
});

server.start((err) => {
    if(err) {
	    throw err;
    }

    console.log('Listening to ' + server.info.uri);
});
