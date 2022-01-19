'use strict';

const Router = require('director').Router;

module.exports = (app) => {
  let router = new Router();

  router.configure({
    notfound: function () {
      window.location.hash = '';
      app.visibility = 'all';
    }
  });

  router.init();
};
