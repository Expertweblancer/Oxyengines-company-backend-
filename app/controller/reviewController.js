let db = require('../models');
let Review = db.Review;

const index = (req, res) => {
    Review.findAll().then(result => {
        res.render('review/reviews', {reviews: result, success: req.flash('success'), 'error': req.flash('error')});
    }).catch(err => {
        res.send(err);
    });
};

const indexApi = (req, res) => {
    Review.findAll().then(reviews => {
        res.send(reviews);
    }).catch(err => {
        res.send(err);
    });
};

const newReview = (req, res) => {
    res.render('review/new_review');
};
const saveNewReview = (req, res) => {
    let review = {
        client_name: req.body.client_name,
        client_review: req.body.client_review
    };
    Review.create(review).then(result => {
        req.flash('success', 'New Review Created');
        res.redirect('/admin/reviews');
    }).catch(err => {
        res.send(err);
    });
};
const editReview = (req, res) => {
    Review.findOne({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.render('review/edit_review', {review: result});
    }).catch(err => {
        res.send(err);
    });
};
const updateReview = (req, res) => {
    let review = {
        client_name: req.body.client_name,
        client_review: req.body.client_review
    };
    Review.update(review, {
        where: {
            id: req.params.id
        }
    }
    ).then(result => {
        req.flash('success', 'Review Updated');
        res.redirect('/admin/reviews');
    }).catch(err => {
        res.send(err);
    });
};
const deleteReview = (req, res) => {
    Review.destroy({
        where: {
            id: req.params.id
        }
    }
    ).then(result => {
        req.flash('success', 'Review Deleted');
        res.redirect('/admin/reviews');
    }).catch(err => {
        res.send(err);
    });
};

module.exports = {
    index,
    indexApi,
    newReview,
    saveNewReview,
    editReview,
    updateReview,
    deleteReview
};