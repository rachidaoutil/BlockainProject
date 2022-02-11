const Prices = require("../models/price");



module.exports = class MarketPriceService{
   
    static async getPrices(userID){
        try {
            //const Balance =  await db.balances.findOne({userID: userID});
             const prices = await Prices.find({}).sort({beginTime:-1}).limit(10)
            return prices;
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
     
    }

    static async recordPrice(Data){
        try {
            //const Balance =  await db.balances.findOne({userID: userID});
            const response = await new Prices(Data).save();

            return response;
        } catch (error) {
            console.log(`Could not  fetch User ${error}`)
        }
     
    }



  
}