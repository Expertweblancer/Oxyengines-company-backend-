let db = require('../models');
let Subscriber = db.Subscriber;

const index = (req, res) => {
    Subscriber.findAll().then(result => {
        res.render('subscriber/subscribers', {subscribers: result, success: req.flash('success'), 'error': req.flash('error')});
    }).catch(err => {
        res.send(err);
    });
};


module.exports = {
    index
};