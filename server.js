// NOTE: ----------------------  Kevin Merritt
// NOTE: ----------------------  Forum Project
// NOTE: ----------------------  Server.js

var express      = require('express'),
    ejs          = require('ejs'),

  bodyParser     = require('body-parser'),
  methodOverride = require('method-override'),
  morgan         = require('morgan'),
  session        = require('express-session'),
  // User           = require('./models/user.js'),
  logger         = require('./misc/logger.js'),
  eyes           = require('eyespect'),

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

// NOTE: ---------------------- Server & Database Connections
mongoose.connect(MONGOURI + "/" + dbname)
server.listen(PORT,function(){console.log("SERVER IS UP ON PORT:", PORT);})

var db = mongoose.connection;
db.on('error', function(){console.log("DATABASE: CONNECTION ERROR: for fuck's sake. " + dbname)})
db.once('open', function(){console.log("DATABASE: CONNECTED: " + dbname)})


// NOTE: ---------------------- Server Routes

server.get('/', function(req, res){res.render('index');});
server.get('/404', function(req,res){res.render('404')})//error page.
