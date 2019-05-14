let express = require( 'express' );
let path = require( 'path' );
let cookieParser = require( 'cookie-parser' );
let logger = require( 'morgan' );
let bodyParser = require( 'body-parser' );
let passport   = require('passport');
let session    = require('express-session');
let flash = require('connect-flash');

require( 'dotenv' ).config();


// / ROUTES
let indexRouter = require( './router/index' );
let adminRouter = require( './router/admin' );
let apiRouter = require( './router/api' );

// db = new Sequelize('postgres://db-service/news-board')

// function sync () {
//   return db.sync({force: true})
// }

// sync()
//   .then(() => {
//     console.log('DB Syncrozied :)\n\n\n')
//   })
//   .catch(err => {
//     console.log(err)
//   })

let app = express();

// view engine setup
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'ejs' );
// app configuration
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized:true})); // session secret
app.use(flash());
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use( logger( 'dev' ) );
app.use( express.json() );
app.use( express.urlencoded( { 'extended': false } ) );
app.use( cookieParser() );
app.use( express.static( path.join( __dirname, 'public' ) ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { 'extended': true } ) );
//
// // Add headers
app.use( ( req, res, next ) => {
    res.header( 'Access-Control-Allow-Origin', '*' );
    res.header( 'Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT' );
    res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization' );
    next();
} );
app.use( '/', indexRouter );
app.use( '/admin', adminRouter );
app.use( '/api', apiRouter );

// catch 404
app.use( ( req, res ) => {
    res.status(404);
    res.send('<h1>404 Not Found</h1>');
} );

// error handler
// eslint-disable-next-line no-unused-vars
// app.use( ( err, req, res, next ) => {
//     // set locals, only providing error in development
//     // res.locals.message = err.message;
//     // res.locals.error = req.app.get( 'env' ) === 'development' ? err : {};
//     //
//     // // render the error page
//     // res.status( err.status || 500 );
//     // res.render( 'error' );
//     res.send(err);
// } );

//Models
var models = require('./app/models');
//Sync Database
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine');
}).catch(function(err) {
    console.log(err, 'Something went wrong with the Database Update!');
});

module.exports = app;
