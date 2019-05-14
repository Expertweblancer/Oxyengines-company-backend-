let db = require('../models');
let Contact = db.Contact;

const index = (req, res) => {
    Contact.findAll().then(result => {
        res.render('contact/contacts', {contacts: result, success: req.flash('success'), 'error': req.flash('error')});
    }).catch(err => {
        res.send(err);
    });
};


module.exports = {
    index
};