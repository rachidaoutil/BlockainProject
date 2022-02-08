const MarketDataService = require("../services/MarketDataService");
const MarketHandler = require("../services/MarketHandler");
const MarketPriceService = require("../services/MarketPriceService");


async function PreTrade(){

  try {


    const buyerValues = await MarketHandler.getbuyerValues(); 
    const sellerCosts = await MarketHandler.getsellerCosts(); 
    const numberOfOrders = await MarketHandler.numberOfOrders(); 

    const sim = {
       buyerValues,sellerCosts,...numberOfOrders,
       "L": 1,
       "H": 200,
       "buyerAgentType": [
         "ZIAgent"
       ],
       "sellerAgentType": [
         "ZIAgent"
       ],
       "periods": 1,
       "periodDuration": 1000,
       "buyerRate": 0.2,
       "sellerRate": 0.2,
       "integer": false,
       "keepPreviousOrders": false,
       "ignoreBudgetConstraint": false,
       "xMarket": {
         "buySellBookLimit": 0,
         "resetAfterEachTrade": true
       }
     }

     const TradePrice = await MarketDataService.getPrice(sim); 
     const TradeVol = await MarketHandler.getTradeVolByPrice(TradePrice.closePrice); 


     if (TradePrice) {
        TradePrice.beginTime = Date.now()
        TradePrice.endTime = Date.now()+60
        TradePrice.volume = TradeVol

        const responsePrice = await MarketPriceService.recordPrice(TradePrice);
        console.log(responsePrice)


       //return Trade(TradePrice)
     }



    
  } catch (error) {
    console.log(error)
    
  }


}

async function Trade(){

    try {

       const TradePrice = await MarketDataService.getPrice(sim); 
       console.log(TradePrice);
       const {Sellers,Buyers} = MarketHandler.getOrdersByPrice(TradePrice);
       const TradeVol = await MarketHandler.getTradeVolByPrice(TradePrice); 
      var currentTradeVol = 0;
      for (let index = 0; index < Math.min(Sellers.TradeSellers.length,Buyers.TradeBuyers.length); index++) {
        const buyer = Buyers.TradeBuyers[index];
        const seller= Sellers.TradeSellers[index];
        let ValidAmount = Math.min(buyer.qty,seller.qty);
        if(ValidAmount <= TradeVol && currentTradeVol <= TradeVol){

          const Trade = await MarketHandler.MakeTrade(buyer,seller,ValidAmount); 


          
      }
    }

       
    } catch (error) {
        console.log(error);

    }

    
}

async function go(){
    const buyerValues = await MarketHandler.getbuyerValues(); 
    const sellerCosts = await MarketHandler.getsellerCosts(); 
    const numberOfOrders = await MarketHandler.numberOfOrders(); 

    const sim = {
       buyerValues,sellerCosts,...numberOfOrders,
       "L": 1,
       "H": 200,
       "buyerAgentType": [
         "ZIAgent"
       ],
       "sellerAgentType": [
         "ZIAgent"
       ],
       "periods": 1,
       "periodDuration": 1000,
       "buyerRate": 0.2,
       "sellerRate": 0.2,
       "integer": false,
       "keepPreviousOrders": false,
       "ignoreBudgetConstraint": false,
       "xMarket": {
         "buySellBookLimit": 0,
         "resetAfterEachTrade": true
       }
     }

    try {
       const TradePrice = await MarketDataService.getPrice(sim); 
       console.log(TradePrice);

    } catch (error) {
        console.log(error);

    }
}


exports.StartMarketEngine = async ()=>{
    await setInterval(()=> PreTrade(),1000*60)


}; // 60 * 1000 milsec
