'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./controllers/routes');
const morgan = require('morgan')
const cors = require('cors')
const mongoose =  require("mongoose");
const reddisService = require("./services/reddisService");
const cookieParser = require('cookie-parser')


//const redis = require("redis");


const { GoogleSpreadsheet } = require('google-spreadsheet');



let app = express();





// Configure view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('x-powered-by', false);

// Configure middleware
app.use(morgan('tiny'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(cookieParser())


// Static file serving happens everywhere but in production
if (process.env.NODE_ENV !== 'production' || true) {
  let staticPath = path.join(__dirname, '..','..','public');

  app.use(express.static(staticPath));
}


// Add the "No Shenanigans" header to all responses under the "/todos" path
app.use('/login', (request, response, next) => {
  console.log(request.body)
  response.set('X-Shenanigans', 'None');
  reddisService.getToken(request, response).then((data) =>{
    response.redirect('/dashboard') 
  }).catch((error)=>{
    console.log(error)
    next();

});

});


// Add the "No Shenanigans" header to all responses under the "/todos" path
app.use('/dashboard', (request, response, next) => {
  console.log(request.body)
  response.set('X-Shenanigans', 'None');
  reddisService.getToken(request, response).then((data) =>{
    next();
  }).catch((error)=>{
    console.log(error)
    response.redirect('/login') 
});
});

// Mount application routes
routes(app);
//Not found response!
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})
// Export Express webapp instance
module.exports = {app};
