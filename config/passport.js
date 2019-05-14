let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let bCrypt = require('bcrypt');
let db = require('../app/models');
let User = db.User;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
function (email, password, cb) {
    return User.findOne({
        where: {
            email
        }
    })
        .then(user => {
            if (!user) {
                return cb(null, false, { message: 'Incorrect email.' });
            }
            //   return cb(null, {a: userPassword, b: user.password}, { message: 'Logged In Successfully' })
            if (passwordMatch(password, user.password)) {
                return cb(null, user, { message: 'Logged In Successfully' });
            } else {
                return cb(null, false, { message: 'Incorrect Password.' });
            }
        })
        .catch(err => cb(err));
}
));

function passwordMatch (pass1, pass2) {
    return pass1 === pass2;
    // return bCrypt.compareSync(pass1, pass2);
}
//serialize
passport.serializeUser(function(user, done) {

    done(null, user.id);

});
// deserialize user
passport.deserializeUser(function(id, done) {
    User.findOne({
        where: {
            id
        }
    }).then(function(user) {
        if (user) {
            done(null, user.get());
        } else {
            done(user.errors, null);
        }
    });
});

module.exports = passport;
