var index = require('../controllers/index.server.controller');
var auth = require('../controllers/auth.server.controller'),
    passport = require('passport');

module.exports = function(app) {
    app.get('/', index.dashboard);
    app.get('/dashboard', index.dashboard);

    app.route('/signup')
        .post(auth.signup)
        .get(auth.renderSignup);

    app.route('/signin')
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        }))
        .get(auth.renderSignin);

    app.get('/signout', auth.signout);

    app.get('/weather', index.weather);
    app.get('/gasandfire', index.gasandfire);
    app.get('/earthquake', index.weather);
}