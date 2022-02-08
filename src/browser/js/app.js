'use strict';

const Vue = require('vue/dist/vue.js');
const router = require('./util/routes');
const Toasted =  ('vue-toasted');

const productView = require('./views/product_form')
const productView2 = require('./views/dashboard')
const productView3 = require('./views/wallet')
const productView4 = require('./views/trade')




Vue.use(Toasted)

// Create main Vue app
let app = new Vue(productView);
let app2 = new Vue(productView2);
let app3 = new Vue(productView3);
let app4 = new Vue(productView4);



// Configure router
//router(app);use
