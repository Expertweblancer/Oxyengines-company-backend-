let session = require('express-session');

function bindSession(app) {
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
    }));
}

module.exports = {
    bindSession
};