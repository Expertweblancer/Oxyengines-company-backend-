let express = require( 'express' );
let serviceController = require('../app/controller/serviceController');
let reviewController = require('../app/controller/reviewController');
let productController = require('../app/controller/productController');
let apiController = require('../app/controller/apiController');

let router = express.Router();

router.get( '/services', serviceController.indexApi );
router.get( '/reviews', reviewController.indexApi );
router.get( '/products', productController.indexApi );
router.post( '/subscribe', apiController.subscribe );
router.post( '/contact-us', apiController.contactUs );



module.exports = router;
