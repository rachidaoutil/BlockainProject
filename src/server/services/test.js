
const priceService = require("./MarketDataService")

const sim = {
    "buyerValues": [
      100,
      95,
      90,
      85,
      80,
      75,
      70,
      60,
      50,
      40,
      30,
      20,
      10
  
    ],
    "sellerCosts": [
      10,
      20,
      30,
      40,
      50,
      60,
      70,
      80,
      90,
      100
    ],
    "L": 1,
    "H": 200,
    "numberOfBuyers": 120,
    "numberOfSellers": 100,
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
  

console.log(priceService.getPrice(sim))