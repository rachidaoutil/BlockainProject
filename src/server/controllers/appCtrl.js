const reddisService = require("../services/reddisService");

// Render home page
exports.test = (request, response) => {
  response.render('tests', {
    env: process.env.NODE_ENV
  });
};

// Render home page
exports.dashboard = (request, response) => {
  response.render('dashboard', {
    env: process.env.NODE_ENV
  });
};

exports.wallet = (request, response) => {
  response.render('wallet', {
    env: process.env.NODE_ENV
  });
};

exports.transactions = (request, response) => {
  response.render('transactions', {
    env: process.env.NODE_ENV
  });
};

exports.trade = (request, response) => {
  response.render('trade', {
    env: process.env.NODE_ENV
  });
};

// Render home page
exports.home = (request, response) => {
  response.render('index', {
    env: process.env.NODE_ENV
  });
};

exports.login = (request, response) => {
  response.render('loginpage', {
    env: process.env.NODE_ENV
  });
};

exports.create = async (request, response) => {
  console.log(request.body)

  let OperationInfo = {};
  let flag = {};



};


exports.logout = (req, res, next) => {
  reddisService.delToken(req, res)
}
