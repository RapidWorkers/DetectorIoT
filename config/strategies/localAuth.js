var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    Auth = require('mongoose').model('Auth');

module.exports = function(){
    passport.use(new LocalStrategy({
        usernameField: 'userid',
        passwordField: 'password'
    },function(username, password, done){
        Auth.findOne({
            userid : username
        }, function(err,user){
            if(err) {
                return done(err);
            }

            if(!user) {
                return done(null, false, {
                    msg: 'not registered'
                });
            }
            if(!user.authenticate(password)){
                return done(null, false, {
                    msg: 'pwd not match'
                });
            }
            return done(null, user);
        })
    }))
}