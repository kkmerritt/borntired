// NOTE: ----------------------  Kevin Merritt
// NOTE: ----------------------  BornTired Project
// NOTE: ----------------------  Server.js

var express         = require('express');
    server = express();
var    ejs          = require('ejs');
var   bodyParser    = require('body-parser');  // pull information from HTML POST (express4)
var  methodOverride = require('method-override');  // simulate DELETE and PUT (express4)
var  morgan         = require('morgan');    // log requests to the console (express4)
var  session        = require('express-session');
var  logger         = require('./misc/logger.js');
var  eyes           = require('eyespect');
var mongoose        = require('mongoose');

// NOTE: ---------------------- Activate / Use Middleware

server.set('view engine', 'ejs'); // tells the render method, what to use
server.set('views', './views'); // tells the renderer where to find templates

server.use(session({
  secret: "1234",
  resave: true,
  saveUninitialized: true
}));

server.use(express.static(__dirname + '/public')); //location for static files (not templates e.g. css, js, img)
server.use(bodyParser.urlencoded({extended: true})); // So we can parse incoming forms into Objects
server.use(methodOverride('_method'));
server.use(morgan('dev'));
server.use(logger);


// NOTE: ---------------------- Server Routes

server.get('/',
function(req, res){
  res.render('index');
});



server.listen(3000, console.log("SERVER IS UP ON PORT: 3000"))
