let express = require( 'express' );

let router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get( '/', ( req, res, next ) => {
    // res.send('Hello World!');
    res.redirect('/admin/login');
} );

module.exports = router;
