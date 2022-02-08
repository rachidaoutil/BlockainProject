const Balances = require("../models/balances");
const Transactions = require("../models/transactions");


module.exports = class UserDataService{
    static async getTransactions(userID){
        try {
            const allUsers = await  User.find({userID: userID});
            return allUsers;
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
    }

    static async getBalance(userID){
        try {
            const Balance =  await Balances.findOne({userID: userID});
            return Balance;
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
    }
    static async createUserTransactions(data){
        try {

            const newTransactions = {
                userID: data.userID,
                status: data.status,
                type: data.type,
                price: data.price,
                qty: data.qty

            }
           const Transaction = await new User(newTransactions).save();
           return Transaction;
        } catch (error) {
            console.log(error);
        } 

    }
    static async getUserTransactionsById(userID){
        try {
            const singleUserTransactionsResponse =  await Transactions.findOne({userID: userID});
            return singleUserTransactionsResponse;
        } catch (error) {
            console.log(`User not found. ${error}`)
        }
    }

    static async updateUserTtransactions(username, email, fullname){
            try {
                const updateResponse =  await User.updateOne(
                    {username}, 
                    {$set: {email,fullname} });

                    return updateResponse;
            } catch (error) {
                console.log(`Could not update User ${error}` );

        }
    }

    static async deleteUserTransactions(UserId){
        try {
            const deletedResponse = await User.findOneAndDelete(UserId);
            return deletedResponse;
        } catch (error) {
            console.log(`Could  ot delete User ${error}`);
        }

    }
}