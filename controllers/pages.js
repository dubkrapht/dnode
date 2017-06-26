module.exports = {
    index: {
        handler: function(request, reply) {
            var home = 
            '<a href="/login">Login</a>'+'</br>'+   
            '<a href="/register">Register</a>';
            reply(home);
        }
    },
    login: {
        handler: function (request, reply) {

            var form =
            '<h1> Login </h1>' +
            '<form method="post" action="login">' +
            '   <p><input type="text"     name="email"    value="" placeholder="E-mail"></p>' +
            '   <p><input type="password" name="password" value="" placeholder="Password"></p>' +
            '   <p><input type="submit"   value="Login"></p>' +
            '</form>';

            reply(form);
        }
    },
    register: {
        handler: function(request, reply) {
            var form =
            '<h1> Register </h1>' +
            '<form method="post" action="register">' +
            '   <p><input type="text"     name="email"    value="" placeholder="E-mail"></p>' +
            '   <p><input type="password" name="password" value="" placeholder="Password"></p>' +
            '   <p><input type="password" name="password_repeat" value="" placeholder="Password Repeat"></p>' +
            '   <p><input type="submit"   value="Register"></p>' +
            '</form>';

            reply(form);
        }
    }

}