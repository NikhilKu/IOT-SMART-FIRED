require('dotenv').config();

const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// View engine setup
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());


// Allow Access-Control-Allow-Origin
app.use( (request, response, next) => {
  response.header('Access-Control-Allow-Credentials', 'true');
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, X-Requested-With");
  response.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, HEAD');
  next();
});


// Require our routes into the application via the route auto loader.
const loadRoutes = require('./routes');
loadRoutes(app);

// Models
const models = require("./models/índex");

// Synchronize models
// models.sequelize.sync().then(() => {
//     console.log("Database looks fine!")
// }).catch((err) => {
//     console.log(err, "Something went wrong with the Database Update!")
// });
app._router.stack.forEach(function(r){
  if (r.route && r.route.path){
    console.log(Object.keys(r.route.methods) + ":  " + r.route.path);
  }
})

module.exports = app;