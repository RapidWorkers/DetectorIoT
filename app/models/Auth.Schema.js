var mongoose = require("mongoose"),
    crypto = require('crypto');

const AuthSchema = new mongoose.Schema(
    {
        userid: {
            type: String,
            unique: true,
            required : 'ID Required',
            trim: true
        },
        password : {
            type: String,
            validate : [
                function(password) {
                    return password && password.length > 8;
                }, 'Password should be longer'
            ]
        },
        salt: String,
        regTime: {type: Number, default: Date.now}
    }
);

AuthSchema.pre('save', function (next) {
    if(this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'),'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
})

AuthSchema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha1').toString('base64');
}

AuthSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
}

mongoose.model('Auth', AuthSchema);