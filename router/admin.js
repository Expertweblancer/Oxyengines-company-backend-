let express = require( 'express' );
let multer = require('multer');
let path = require('path');

let authController = require('../app/controller/authController');
let serviceController = require('../app/controller/serviceController');
let reviewController = require('../app/controller/reviewController');
let productController = require('../app/controller/productController');
let subscriberController = require('../app/controller/subscriberController');
let contactController = require('../app/controller/contactController');
let middleware = require('../app/middleware');

let router = express.Router();
let upload = multer({
    dest:  path.join( __dirname, '../public/uploads' )
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
});


router.get('/login', authController.logIn);
router.post('/login', authController.logInAttempt);
router.get('/logout', authController.logOut);

router.get( '/dashboard', middleware.loggedIn, ( req, res) => {
    res.render('dashboard');
} );

router.get( '/services', middleware.loggedIn, serviceController.index );
router.get( '/new-service', middleware.loggedIn, serviceController.newService );
router.post( '/save-service', middleware.loggedIn, serviceController.saveNewService );
router.get( '/edit-service/:id', middleware.loggedIn, serviceController.editService );
router.post( '/edit-service/:id/save', middleware.loggedIn, serviceController.updateService );
router.post( '/delete-service/:id', middleware.loggedIn, serviceController.deleteService );

router.get( '/reviews', middleware.loggedIn, reviewController.index );
router.get( '/new-review', middleware.loggedIn, reviewController.newReview );
router.post( '/save-review', middleware.loggedIn, reviewController.saveNewReview );
router.get( '/edit-review/:id', middleware.loggedIn, reviewController.editReview );
router.post( '/edit-review/:id/save', middleware.loggedIn, reviewController.updateReview );
router.post( '/delete-review/:id', middleware.loggedIn, reviewController.deleteReview );

router.get( '/products', middleware.loggedIn, productController.index );
router.get( '/new-product', middleware.loggedIn, productController.newProduct );
router.post( '/save-product', middleware.loggedIn, upload.single('product_image'), productController.saveNewProduct );
router.get( '/edit-product/:id', middleware.loggedIn, productController.editProduct );
router.post( '/edit-product/:id/save', middleware.loggedIn, upload.single('product_image'), productController.updateProduct );
router.post( '/delete-product/:id', middleware.loggedIn, productController.deleteProduct );

router.get( '/subscribers', middleware.loggedIn, subscriberController.index );
router.get( '/contacts', middleware.loggedIn, contactController.index );

module.exports = router;
