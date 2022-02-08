//const client = require('./client');
const userCtrl = require('./userCtrl');
const dataCtrl = require('./dataCtrl');
const appCtrl = require('./appCtrl');





// Define handlers for application routes
module.exports = (app) => {

  app.post('/testbalance', dataCtrl.getBalance);

  app.get('/test', dataCtrl.getPrice);
  app.post('/ordersdata', dataCtrl.getOrders);



  app.get('/', appCtrl.home);

  app.get('/dashboard', appCtrl.dashboard);
  app.get('/wallet', appCtrl.wallet);

  app.get('/trade', appCtrl.trade);
  app.get("/transactions", appCtrl.transactions);
 
  app.get("/login", appCtrl.login);
  app.get("/logout", appCtrl.logout);

  app.post("/loginauth", userCtrl.apiGetUserById);
  app.post("/signup", userCtrl.apiCreateUser);

  app.post("/dashdata", dataCtrl.apiGetDashData);
  app.get("/tradedata", dataCtrl.apiGetTradeData);
  app.get("transactionsdata", dataCtrl.apiGetTransactionsData);

  app.post("/buy", dataCtrl.CreateBuy);
  app.post("/sell", dataCtrl.CreateSell);

  app.delete("/buy", dataCtrl.apiDeleteBuy);
  app.delete("/sell", dataCtrl.apiDeleteSell);

  app.put("/buy", dataCtrl.CreateBuy);
  app.put("/sell", dataCtrl.CreateSell);

  app.post("/transfer", dataCtrl.CreateTransfer);




  //app.post('/client', client.create);



};
