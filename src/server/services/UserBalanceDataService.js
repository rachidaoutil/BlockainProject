const Balances = require("../models/balances");



module.exports = class UserBalanceService{
   
    static async getBalance(userID){
        try {
            //const Balance =  await db.balances.findOne({userID: userID});
             const balance = await Balances.aggregate([
                { $match: {Beneficiary: userID } },
                { $group: { _id: null, balance: { $sum: "$credit" } } }
            ])
            return balance[0];
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
     
    }

    static async getTransfers(userID){
        try {
            //const Balance =  await db.balances.findOne({userID: userID});
             const balance = await Balances.aggregate([
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
            
           const Credit = await new Balances(newCredit).save();
           return Credit;
        } catch (error) {
            console.log(error);
        } 

    }
    
    static async createAccount(data){
        try {
            const newCredit = {
                Initiator:"Platform",
                credit: 100,
                Beneficiary:data.username
            }
            
           const Credit = await new Balances(newCredit).save();
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