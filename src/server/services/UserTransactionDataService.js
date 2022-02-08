const Transfer = require("../models/transfer");




class UserTransfersDataService {

    static async getAllTransactions(userID, limit) {
        let AllTransactions = {}
        try {
            if (limit) {
                AllTransactions = await Transfer.find({ userID: userID }).limit(limit);
            } else {
                AllTransactions = await Transfer.find({ userID: userID });
            }
            return AllTransactions;
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
    }

    static async createUserTransactions(data) {
        try {

            const newTransfer = {
                userID: data.userID,
                From: data.From,
                To: data.To,
                qty: data.qty

            }
            const transfer = await new Transfer(newTransfer).save();
            return transfer;
        } catch (error) {
            console.log(error);
        }

    }
    static async getUserTransactionsById(userID) {
        try {
            const singleUserTransactionsResponse = await Transactions.findOne({ userID: userID });
            return singleUserTransactionsResponse;
        } catch (error) {
            console.log(`User not found. ${error}`)
        }
    }

    static async updateUserTtransactions(username, email, fullname) {
        try {
            const updateResponse = await User.updateOne(
                { username },
                { $set: { email, fullname } });

            return updateResponse;
        } catch (error) {
            console.log(`Could not update User ${error}`);

        }
    }

    static async deleteUserTransactions(UserId) {
        try {
            const deletedResponse = await User.findOneAndDelete(UserId);
            return deletedResponse;
        } catch (error) {
            console.log(`Could  ot delete User ${error}`);
        }

    }
}




module.exports = { UserTransfersDataService }