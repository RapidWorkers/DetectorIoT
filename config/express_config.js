var express = require('express')
    bodyParser  = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    compress = require('compression'),
    config = require('./config');

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

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/api.server.routes.js')(app);
    app.use(express.static('public')); //route static files.

    return app;
}