// NOTE: ----------------------  Kevin Merritt
// NOTE: ----------------------  BornTired Project
// NOTE: ----------------------  Server.js

var express         = require('express');
var    ejs          = require('ejs');
var   bodyParser    = require('body-parser');  // pull information from HTML POST (express4)
var  methodOverride = require('method-override');  // simulate DELETE and PUT (express4)
var  morgan         = require('morgan');    // log requests to the console (express4)
var  session        = require('express-session');
// var  User           = require('./models/user.js');
var  logger         = require('./misc/logger.js');
var  eyes           = require('eyespect');
var mongoose        = require('mongoose');
var sendgrid_api_key = process.env.sendgrid_api_key;
var sendgrid        = require('sendgrid')(sendgrid_api_key);





PORT = process.env.PORT || 3000, server = express(),
MONGOURI = process.env.MONGOLAB_URI || "mongodb://localhost:27017/users",
  dbname = "borntired", mongoose = require('mongoose');

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


// NOTE: ---------------------- DB Models
 var Article = mongoose.model('Article', {
     text : String
 });


// NOTE: ---------------------- Server & Database Connections
mongoose.connect(MONGOURI + "/" + dbname)
server.listen(PORT,function(){console.log("SERVER IS UP ON PORT:", PORT);})

var db = mongoose.connection;
db.on('error', function(){console.log("DATABASE: CONNECTION ERROR: for fuck's sake. " + dbname)})
db.once('open', function(){console.log("DATABASE: CONNECTED: " + dbname)})


// NOTE: ---------------------- Server Routes

server.get('/', function(req, res){res.render('index');});

server.post('/', function(req,res){

var sendgrid  = require('sendgrid')(sendgrid_api_key);
sendgrid.send({
  to:       process.env.EMAIL,
  from: req.body.email,
  subject:  'borntired email',
  text:     req.body.name + " - " + req.body.message

}, function(err, json) {
  if (err) {res.render('404');}
  else {res.render('messagesent');}
  console.log(json);
});

});
