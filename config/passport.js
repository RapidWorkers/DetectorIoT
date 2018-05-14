var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    Auth = require('mongoose').model('Auth');

module.exports = function() {
    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        Auth.findOne({
            _id: id
        }, '-password -salt', function(err, user) {
            done(err, user);
            });
        })
        require('./strategies/localAuth')();
};