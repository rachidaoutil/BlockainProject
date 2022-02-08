const { UserTransfersDataService } = require("../services/UserTransactionDataService");
const { UserOrdersDataService } = require("../services/UserOrdersDataService");
const UserBalanceService = require("../services/UserBalanceDataService");
const UserWalletDataService = require("../services/UserWalletDataService");
const MarketDataService = require("../services/MarketDataService");
const MarketHandler = require("../services/MarketHandler");
const MarketPriceService = require("../services/MarketPriceService");





module.exports = class User {

   static async apiGetDashData(req, res, next) {
      console.log(req.body)
      let Data = {}
      const wallet = req.body.wallet || {};
      const account = req.body.account || {};

      let limit = req.body.limit || 0;
      try {

         const Transfers = await UserBalanceService.getTransfers(account);
         const CrytptoTransfers= await UserWalletDataService.getCryptoTransfers(wallet); 

         //const Orders = await UserOrdersDataService.getAllOrders(userId, limit);
         const MoneyBalance = await UserBalanceService.getBalance(account); 
         const McoinBalance = await UserWalletDataService.getBalance(wallet);
         const price = {
            val: 0.65,
            change: 8.9
         };

         Data = {
            statusCode:1,
            msg:"Good",
            data: {
               price,
               balance:{
                  money: MoneyBalance.balance,
                  coin: McoinBalance.balance
               },
               Transfers:CrytptoTransfers.concat(Transfers)
               }
         }

      } catch (error) {
         console.log(error)

         Data = {
            statusCode:0,
            msg:error
         }         }
      res.send(Data);

   }

   static async apiGetTradeData(req, res, next) {
      try {
         const data = await UserService.getAllData(7);

         if (!data) {
            res.status(404).json("There are no such User!")
         }

         res.send(data);
      } catch (error) {
         res.status(500).json({ error: error })
      }

   }

   static async apiGetTransactionsData(req, res, next) {
      try {
         const data = await UserService.getAllData(7);

         if (!data) {
            res.status(404).json("There are no such User!")
         }

         res.send(data);
      } catch (error) {
         res.status(500).json({ error: error })
      }

   }

   static async CreateTransfer(req, res, next) {
      console.log(req.body)

      let Data  = {}

      const mybalance = await UserBalanceService.getBalance(req.body.From);
      console.log(mybalance)
      req.body.mybalance = mybalance.balance
      const TransferOrder  = req.body || {}
      

      if(checkIfValid(TransferOrder)){
         try {
            let Uamount =  TransferOrder.qty
            let Samount = TransferOrder.qty*-1


            const ConsumedCredit = {
               initiator: TransferOrder.From,
               credit: Uamount,
               beneficiary:TransferOrder.To,
            }

            const SpentCredit = {
               initiator: TransferOrder.To,
               credit: Samount,
               beneficiary:TransferOrder.From
            }

            const createdConsumedCredit = await UserBalanceService.createCredit(ConsumedCredit);
            const createdSpentCredit = await UserBalanceService.createCredit(SpentCredit);
            const MoneyBalance = await UserBalanceService.getBalance(TransferOrder.From); 
            const McoinBalance = await UserWalletDataService.getBalance(TransferOrder.userID); 




            Data = {
               statusCode:1,
               msg:"Good",
               data: {
                  money: MoneyBalance.balance,
                  coin: McoinBalance.balance,
                  }
            }
         } catch (error) {
            Data = {
               statusCode:0,
               msg:error
            }         
         }
      }else{
         Data = {
            statusCode:0,
            msg:"Not enough fund!"
         }
      }

      res.json(Data);

    
   }

   static async CreateCryptoTransfer(req, res, next) {
      console.log(req.body)

      let Data  = {}

      const mybalance = await UserWalletDataService.getBalance(req.body.From);
      console.log(mybalance)
      req.body.mybalance = mybalance.balance
      const TransferOrder  = req.body || {}
      

      if(checkIfValid(TransferOrder)){
         try {
            let Uamount =  TransferOrder.qty
            let Samount = TransferOrder.qty*-1


            const ConsumedCredit = {
               initiator: TransferOrder.From,
               credit: Uamount,
               beneficiary:TransferOrder.To,
            }

            const SpentCredit = {
               initiator: TransferOrder.To,
               credit: Samount,
               beneficiary:TransferOrder.From
            }

            const createdConsumedCredit = await UserWalletDataService.createCredit(ConsumedCredit);
            const createdSpentCredit = await UserWalletDataService.createCredit(SpentCredit);
            const MoneyBalance = await UserBalanceService.getBalance(TransferOrder.From); 
            const McoinBalance = await UserWalletDataService.getBalance(TransferOrder.userID); 




            Data = {
               statusCode:1,
               msg:"Good",
               data: {
                  money: MoneyBalance.balance,
                  coin: McoinBalance.balance,
                  }
            }
         } catch (error) {
            Data = {
               statusCode:0,
               msg:error
            }         
         }
      }else{
         Data = {
            statusCode:0,
            msg:"Not enough fund!"
         }
      }

      res.json(Data);

    
   }

   static async getBalance(req, res, next) {
      console.log(req.body.userID)
      try {

         const MoneyBalance = await UserBalanceService.getBalance(TransferOrder.From); 
         const McoinBalance = await UserWalletDataService.getBalance(TransferOrder.userID); 


         res.json(currentBalance);
      } catch (error) {
         res.status(500).json({ error: error });
      }
   }

   static async getPrice(req, res, next) {

      try {
         const Prices = await MarketPriceService.getPrices();
         res.json(Prices)
      } catch (error) {
         console.log(req.body)

         res.status(500).json({ error: error });
      }
   }

   static async getOrders(req, res, next) {
      console.log(req.body)
      let Data  = {}


      try {
         
         const orders = await MarketHandler.getOrders(req.body.userID);
         Data = {
            statusCode:1,
            msg:"Good",
            data: {
               orders
               }
         }

      } catch (error) {
         console.log(error)

         res.status(500).json({ error: error });
      }
      res.json(Data)

   }

   static async getTradeVol(req, res, next) {

      console.log(req.body)
        try {

         const TradeVol = await MarketHandler.getOrdersByPrice(10);
         res.json(TradeVol);

      } catch (error) {
         console.log(error)
         res.status(500).json({ error: error });
      }
   }

   static async CreateBuy(req, res, next) {
      let Data  = {}

      try {
         const createdBuy = await MarketHandler.createBuyOrder(req.body);
         const MoneyBalance = await UserBalanceService.getBalance(req.body.account); 
         const McoinBalance = await UserWalletDataService.getBalance(req.body.wallet);

         Data = {
            statusCode:1,
            msg:"Good",
            data: {
               newOrder: createdBuy,
               balance:{money: MoneyBalance.balance,
                        coin: McoinBalance.balance},
               }
         }

      } catch (error) {
         Data = {
            statusCode:0,
            msg:error
         } 
      }
      res.json(Data);

   }

   static async CreateSell(req, res, next) {
      let Data  = {}

      try {
         let createdSell = await MarketHandler.createSellOrder(req.body);
         const MoneyBalance = await UserBalanceService.getBalance(req.body.account); 
         const McoinBalance = await UserWalletDataService.getBalance(req.body.wallet); 

         Data = {
            statusCode:1,
            msg:"Good",
            data: {
               newOrder: createdSell,
               balance:{money: MoneyBalance.balance,
                        coin: McoinBalance.balance},
               }
         }
      } catch (error) {
         Data = {
            statusCode:0,
            msg:error
         } 
      }
      res.json(Data);

   }

   static async apiUpdateBuy(req, res, next) {
      try {
         const UserData = {}
         User.username = req.body.username;
         User.email = req.body.email;
         User.fullname = req.body.fullname

         const updatedUserData = await UserService.updateUserData(UserData);

         if (updatedUser.modifiedCount === 0) {
            throw new Error("Unable to update User, error occord");
         }

         res.json(updatedUser);

      } catch (error) {
         res.status(500).json({ error: error });
      }
   }

   static async apiUpdateSell(req, res, next) {
      try {
         const UserData = {}
         User.username = req.body.username;
         User.email = req.body.email;
         User.fullname = req.body.fullname

         const updatedUserData = await UserService.updateUserData(UserData);

         if (updatedUser.modifiedCount === 0) {
            throw new Error("Unable to update User, error occord");
         }

         res.json(updatedUser);

      } catch (error) {
         res.status(500).json({ error: error });
      }
   }

   static async apiDeleteBuy(req, res, next) {
      try {
         const UserDataID = req.body.id;
         const deleteResponse = await UserService.deleteUser(UserDataID)
         res.json(deleteResponse);
      } catch (error) {
         res.status(500).json({ error: error })
      }
   }


   static async apiDeleteSell(req, res, next) {
      try {
         const UserDataID = req.body.id;
         const deleteResponse = await UserService.deleteUser(UserDataID)
         res.json(deleteResponse);
      } catch (error) {
         res.status(500).json({ error: error })
      }
   }

}


function isEmpty(str) {
   return (!str || str.length === 0);
}

function checkIfValid(data) {
   const qty  = parseFloat(data.qty)
   const mybalance = parseFloat(data.mybalance)
   const recpt = data.To
   console.log(qty,mybalance,recpt)

   return mybalance >= qty && !isEmpty(recpt)
}

