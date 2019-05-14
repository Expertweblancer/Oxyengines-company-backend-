let db = require('../models');
let Subscriber = db.Subscriber;
let Contact = db.Contact;

const subscribe = (req, res) => {
    let subscribe = {
        email: req.body.email
    };
    Subscriber.create(subscribe).then(result => {
        req.flash('success', 'New Subscriber Created');
        res.status(200);
        res.setHeader('content-type', 'application/json');
        res.send(['Subscribed']);
    }).catch(err => {
        res.send(err);
    });
};

const contactUs = (req, res) => {
    let contact = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        subject: req.body.subject,
        message: req.body.message,
        category: req.body.category
    };
    Contact.create(contact).then(result => {
        res.status(200);
        res.setHeader('content-type', 'application/json');
        res.send(['Received']);
    }).catch(err => {
        res.send(err);
    });
};


module.exports = {
    subscribe,
    contactUs
};