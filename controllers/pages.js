exports.index = {  
    handler: function (request, reply) {
        var data =
        '<a href="login">login</a> or <a href="register">register</a>';

        reply(data);
    }
}

exports.login = {  
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
}

exports.register = {  
    handler: function (request, reply) {

        var form =
        '<h1> Register </h1>' +
        '<form method="post" action="register">' +
        '   <p><input type="text"     name="email"    value="" placeholder="E-mail"></p>' +
        '   <p><input type="password" name="password" value="" placeholder="Password"></p>' +
        '   <p><input type="submit"   value="Login"></p>' +
        '</form>';

        reply(form);
    }
}