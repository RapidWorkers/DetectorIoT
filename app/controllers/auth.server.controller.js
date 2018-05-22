var Auth = require('mongoose').model('Auth'),
    passport = require('passport');

var getErrorMessage = function(err) {
    var message = '';

    if(err.code) {
                message = 'Something went Wrong';
    } else {
        for (var errName in err.errors) {
            if(err.errors[errName].message) message = err.errors[errName].message;
        }
    }
    return message;
};

exports.signup = function(req,res,next){
    if(!req.user) {

        console.log(req.body);

        var auth = new Auth(req.body);
        var message = null;

        auth.save(function (err) {
            if (err) {
                message = getErrorMessage(err);
                console.log(err);
                req.flash('error', message);
                return res.redirect('/signup');
            }
            req.login(auth, function (err) {
                if (err) return next(err);
                return res.redirect('/');
            })
        })
    }else{
           return res.redirect('/');
        }
}

exports.signout = function(req, res){
    req.logout();
    res.redirect('/');
}

exports.renderSignin = function(req, res, next) {
    Auth.find(function(err, accounts) {
        if(err) return next(err);
        if(!Object.keys(accounts).length) return res.redirect('/signup');

        if(!req.user) {
            res.render('auth/signin', {
                messages : req.flash('error') || req.flash('info')
            });
        }else {
            return res.redirect('/');
        }
    });
};

exports.renderSignup = function(req,res,next) {
    Auth.find(function(err, accounts){
        if(err) return next(err);
        if(Object.keys(accounts).length) return res.redirect('/signin');

        if (!req.user) {
            res.render('auth/signup', {
                messages : req.flash('error')
            });
        } else {
            return res.redirect('/');
        }
    });
};