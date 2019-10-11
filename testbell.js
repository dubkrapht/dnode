const Bell = require('@hapi/bell');
const Hapi = require('@hapi/hapi');


const internals = {};


internals.start = async function () {

    const server = Hapi.server({ port: 8000, host: '192.168.129.223' });
    await server.register(Bell);

    // Make sure to set a "Callback URL" and
    // check the "Allow this application to be used to Sign in with Twitter"
    // on the "Settings" tab in your Twitter application

    server.auth.strategy('twitter', 'bell', {
        provider: 'twitter',
        password: 'cookie_encryption_password_secure',
        isSecure: false,
        clientId: 'hZ6WcVVxo6RpikUmUnN5Mly95',                               // Set client id
        clientSecret: '2G0cnwUlCi6V9UYrEycGLrfMSabuo7zUBnxUsx2BJzBSSkjaNA'                            // Set client secret
    });

    server.route({
        method: '*',
        path: '/bell/door',
        options: {
            auth: 'twitter',
            handler: function (request, h) {

                return '<pre>' + JSON.stringify(request.auth.credentials, null, 4) + '</pre>';
            }
        }
    });

    await server.start();
    console.log('Server started at:', server.info.uri);
};

internals.start();