const buyerValues = require("../models/buyerValues");
const sellerCosts = require("../models/sellerCosts");
const UserBalanceService = require("./UserBalanceDataService");
const UserWalletDataService = require("./UserWalletDataService");
const UsersService = require("./UsersService");






module.exports = class MarketHandler{
   
    static async getsellerCosts(){
        try {
            //const Balance =  await db.balances.findOne({userID: userID});
             const SellerCosts = await sellerCosts.find({}, {price:1,qty:1, _id:0}).sort({"price":1});
             //SellerCosts.reduce((a,i)=>a.concat(Array(i.qty).fill(i.price)),[])
             let Dres = SellerCosts.reduce(function (res, current, index, array) {
                return res.concat(Array(current.qty).fill(current.price));
            }, []);

            return Dres;
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
     
    }

    static async getbuyerValues(){
        try {
            //const Balance =  await db.balances.findOne({userID: userID});
             const BuyerValues = await buyerValues.find({}, {price:1,qty:1, _id:0}).sort({"price":-1});
             //SellerCosts.reduce((a,i)=>a.concat(Array(i.qty).fill(i.price)),[])
             let Dres = BuyerValues.reduce(function (res, current, index, array) {
                return res.concat(Array(current.qty).fill(current.price));
            }, []);

            return Dres;
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
    }


    static async numberOfOrders(){
        try {
            //const Balance =  await db.balances.findOne({userID: userID});
             const numberOfBuyers = await buyerValues.find({}).count();
             const numberOfSellers = await sellerCosts.find({}).count();

          
            return {numberOfBuyers,numberOfSellers};
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
    }

    static async createBuyOrder(data){
        try {

            const newBuyOrder = {
                userID: data.userID,
                price: data.price,
                type:'buy',
                qty: data.qty

            }
            
           const Credit = await new buyerValues(newBuyOrder).save();
           return Credit;
        } catch (error) {
            console.log(error);
        } 

    }



    static async createSellOrder(data){
        try {

            const newSellOrder = {
                userID: data.userID,
                price: data.price,
                type:'sell',
                qty: data.qty

            }
            
           const Credit = await new sellerCosts(newSellOrder).save();
           return Credit;
        } catch (error) {
            console.log(error);
        } 

    }

    static async getOrders(userID){
        try {
            //const Balance =  await db.balances.findOne({userID: userID});
            const numberOfBuyers = await buyerValues.find({userID: userID})
            const numberOfSellers = await buyerValues.find({userID: userID})
            return {...numberOfBuyers,...numberOfSellers};
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
     
    }

    static async getOrdersByPrice(price){
        try {
            const TradeBuyers = await buyerValues.find( { price: { $lte: price } } ).sort({"price":-1});
            const TradeSellers = await sellerCosts.find( { price: { $lte: price } } ).sort({"price":-1});
            return {TradeBuyers,TradeSellers};
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
     
    }

    static async getTradeVolByPrice(price){
        try {
            const TradeBuyersVol = await buyerValues.aggregate([
                { $match: { price: { $lte: price } }  },
                { $group: { _id: null, vol: { $sum: "$qty" } } }
            ])

            const TradeSellersVol = await sellerCosts.aggregate([
                { $match: { price: { $lte: price } }  },
                { $group: { _id: null, vol: { $sum: "$qty" } } }
            ])
            const vol = Math.min(TradeSellersVol[0].vol, TradeBuyersVol[0].vol)

             return vol;
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
     
    }

    

    static async getOrdersByID(userID){
        try {
            //const Balance =  await db.balances.findOne({userID: userID});
            const numberOfBuyers = await buyerValues.findOne({userID: userID});
            const numberOfSellers = await sellerCosts.findOne({userID: userID});
            return Dres;
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
     
    }


    static async getMarketDistrubution(){
        try {
            //const Balance =  await db.balances.findOne({userID: userID});
            const BuyersDist = await buyerValues.find({}, {_id:0, qty: 1, price: 1 } ).sort({"price":-1});
            const SellerDist = await sellerCosts.find({}, {_id:0, qty: 1, price: 1 } ).sort({"price":-1});


         
            return {BuyersDist,SellerDist}
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
    }

    static async MakeTrade(buyOrder,sellOrder,TradeVol){
        try {
            //const Balance =  await db.balances.findOne({userID: userID});
            //const sellerOrder = await sellerCosts.findOne({_id: OrderID});
            //const buyerOrder = await sellerCosts.findOne({_id: OrderID});
            const SellerUser = UsersService.getUserById(sellOrder.userID)
            const BuyerUser = UsersService.getUserById(buyOrder.userID)

            const MoneyTransferData = {
                From:BuyerUser.username,
                To:SellerUser.username,
                qty:TradeVol*sellerOrder.price

            }

            const CoinTransferData = {
                From:SellerUser._id,
                To:BuyerUser._id,
                qty:TradeVol

            }

            const transferMoney = await CreateMoneyTransfer(MoneyTransferData)
            const transferCoin = await CreateCryptoTransfer(CoinTransferData)

            const UpdatedSellOrder = await UpdateSellOrder(sellOrder,TradeVol);
            const UpdatedBuyOrder = await UpdateBuyOrder(sellOrder,TradeVol);
         
            return Dres;
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
     
    }

    static async UpdateSellOrder(OrderID,qty){
        try {
            const updateResponse =  await sellerCosts.updateOne(
                { _id: OrderID },
                {
                  $set: { qty: qty },
                  $currentDate: { lastModified: true }
                })
            return updateResponse;
        } catch (error) {
            console.log(`Could not update User ${error}` );

    }
    }

    static async UpdateBuyOrder(OrderID,qty){
        try {
            const updateResponse =  await buyerValuesrac.updateOne(
                { _id: OrderID },
                {
                  $set: { qty: qty },
                  $currentDate: { lastModified: true }
                })
            return updateResponse;
        } catch (error) {
            console.log(`Could not update User ${error}` );

    }
}




    static async DeleteOrder(OrderID){
            try {
                const updateResponse =  await Balances.deleteOne({ _id: OrderID });
                return updateResponse;
            } catch (error) {
                console.log(`Could not update User ${error}` );

        }
    }

    }



async function CreateMoneyTransfer(args) {
    console.log(args)

    let Data  = {}

    const mybalance = await UserBalanceService.getBalance(args.From);
    console.log(mybalance)
    const TransferOrder  = args|| {}
    

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
  



          Data = {
             statusCode:1,
             msg:"Good",
             data: {
                createdConsumedCredit,
                createdSpentCredit
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

    console.log(Data);

  
 }

async function CreateCryptoTransfer(args) {
    console.log(args)

    let Data  = {}

    const mybalance = await UserWalletDataService.getBalance(args.From);
    console.log(mybalance)
    const TransferOrder  = args || {}
    

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

    console.log(Data);

  
 }

 function checkIfValid(data) {
    const qty  = parseFloat(data.qty)
    const mybalance = parseFloat(data.mybalance)
    const recpt = data.To
    console.log(qty,mybalance,recpt)
 
    return mybalance >= qty && !isEmpty(recpt)
 }
 
 