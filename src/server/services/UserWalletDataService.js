const Wallet = require("../models/wallets");



module.exports = class UserWalleteService{
   
    static async getBalance(userID){
        try {
            //const Balance =  await db.balances.findOne({userID: userID});
             const balance = await Wallet.aggregate([
                { $match: {Beneficiary: userID } },
                { $group: { _id: null, balance: { $sum: "$credit" } } }
            ])
            return balance[0];
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
     
    }

    static async getCryptoTransfers(userID){
        try {
            //const Balance =  await db.balances.findOne({userID: userID});
             const balance = await Wallet.aggregate([
                { $match: {Beneficiary: userID } },
            ])
            return balance;
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
     
    }

    static async createCredit(data){
        try {

            const newCredit = {
                Initiator:data.initiator,
                credit: data.credit,
                Beneficiary:data.beneficiary
            }
           const Credit = await new Wallet(newCredit).save();
           return Credit;
        } catch (error) {
            console.log(error);
        } 

    }

    static async createWallet(data){
        try {

            const newCredit = {
                Initiator:"Platform",
                credit: 25,
                Beneficiary:data._id
            }
            
           const Credit = await new Wallet(newCredit).save();
           return Credit;
        } catch (error) {
            console.log(error);
        } 

    }

    static async updateUserBalance(data){
            try {
                const updateResponse =  await Balances.updateOne(
                    {username}, 
                    {$set: data });

                    return updateResponse;
            } catch (error) {
                console.log(`Could not update User ${error}` );

        }
    }

  
}