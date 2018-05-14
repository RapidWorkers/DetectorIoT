var express = require('express'),
    bodyParser  = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    compress = require('compression'),
    config = require('./config'),
    session = require('express-session'),
    flash = require('connect-flash'),
    passport = require('passport');


module.exports = function() {
    var app = express();

    if(process.env.NODE_ENV === 'development') {
        app.use(morgan('dev')); //logger
    }

    //else if (process.env.NODE_ENV === 'production') {
    //   app.use(compress()); //can cause problem with arduino..
    //}


    app.use(bodyParser.urlencoded({ extended: true }));//if application/x-url-encoded -> parse
    app.use(bodyParser.json());//if application/json -> parse
    app.use(methodOverride());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.webConfig.sessionSecret
    }));

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/api.server.routes.js')(app);
    app.use(express.static('public')); //route static files.

    return app;
}