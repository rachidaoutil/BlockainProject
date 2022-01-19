//const client = require('./client');
const userCtrl = require('./userCtrl');
const dataCtrl = require('./dataCtrl');
const appCtrl = require('./appCtrl');





// Define handlers for application routes
module.exports = (app) => {
  app.get('/dashboard', appCtrl.dashboard);
  app.get("/", appCtrl.home);
  app.get("/login", appCtrl.login);

  app.get("/test", appCtrl.test);
  app.get("/logout", appCtrl.logout);



  app.post("/loginauth", userCtrl.apiGetUserById);
  app.post("/signup", userCtrl.apiCreateUser);

  app.get("/data", dataCtrl.apiGetData);
  app.post("/datalog", dataCtrl.apiCreateMarketData);




  //app.post('/client', client.create);



};
