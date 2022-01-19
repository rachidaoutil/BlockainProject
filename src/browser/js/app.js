'use strict';

const Vue = require('vue/dist/vue.js');
const router = require('./util/routes');
const Toasted =  ('vue-toasted');

const productView = require('./views/product_form')

Vue.use(Toasted)

// Create main Vue app
let app = new Vue(productView);
// Configure router
//router(app);use
