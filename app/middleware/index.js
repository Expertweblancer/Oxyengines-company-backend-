const loggedIn = (req, res, next) => {
    // return next();
    if (req.isAuthenticated())
        return next();
    res.redirect('/admin/login');
};

module.exports = {
    loggedIn
};