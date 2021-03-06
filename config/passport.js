var passport = require('passport'),
    mongoose = require('mongoose');


module.exports = function() {

    var Auth = require('mongoose').model('Auth');

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