let passport = require('../../config/passport');

const logIn = (req, res) => {
    res.render('login', {success: req.flash('success'), 'error': req.flash('error')});
};

const logInAttempt =  passport.authenticate('local', {
    successRedirect: '/admin/dashboard',
    failureRedirect: '/admin/login',
    failureFlash: 'Invalid username or password.'
});


const logOut = (req, res) => {
    req.logOut();
    req.flash('success', 'Logout Complete');
    res.redirect('/admin/login');
};

module.exports = {
    logIn,
    logInAttempt,
    logOut
};