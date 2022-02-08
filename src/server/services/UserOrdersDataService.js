
const Orders = require("../models/orders");


class UserOrdersDataService {

    static async getAllOrders(userID, limit) {
        let orders = {}
        try {
            if (limit) {
                orders = await Orders.find({ userID: userID }).limit(limit);
            } else {
                Orders = await Orders.find({ userID: userID });
            }
            return orders;
        } catch (error) {
            console.log(`Cloud not fetch  ${error}`)
        }

    }

    static async getBuyOrders(userID, limit) {
        let orders = {}
        try {
            if (limit) {
                orders = await Orders.find({ userID: userID, type: "BUY" }).limit(limit);
            } else {
                orders = await Orders.find({ userID: userID, type: "BUY" });
            }
            return orders;
        } catch (error) {
            console.log(`Cloud not fetch  ${error}`)
        }

    }

    static async getSellOrders(userID, limit) {
        let orders = {}
        try {
            if (limit) {
                orders = await Orders.find({ userID: userID, type: "SELL" }).limit(limit);
            } else {
                orders = await Orders.find({ userID: userID, type: "SELL" });
            }
            return orders;
        } catch (error) {
            console.log(`Cloud not fetch  ${error}`)
        }

    }
    static async createBuyOrder(data) {
        try {

            const newBuyOrder = {
                userID: data.userID,
                price: data.price,
                qty: data.qty

            }
            const BuyOrder = await new Orders(newBuyOrder).save();
            return BuyOrder;
        } catch (error) {
            console.log(error);
        }

    }

    static async createSellOrder(data) {
        try {

            const newSellOrder = {
                userID: data.userID,
                transactions: null,
                type: "SELL",
                price: data.price,
                qty: data.qty

            }
            const SellOrder = await new Orders(newSellOrder).save();
            return SellOrder;
        } catch (error) {
            console.log(error);
        }

    }

    static async updateOrder(id,transaction) {
        try {
            
            Orders.transactions.push(transaction);
            const updateResponse = Orders.save(done);

            return updateResponse;
        } catch (error) {
            console.log(`Could not update User ${error}`);

        }
    }

    static async deleteOrder(orderID) {
        try {
            const deletedResponse = await Orders.findOneAndDelete(orderID);
            return deletedResponse;
        } catch (error) {
            console.log(`Could not delete ${error}`);
        }

    }

}


module.exports = { UserOrdersDataService }