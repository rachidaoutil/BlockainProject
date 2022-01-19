const app = require("../../browser/js/views/product_form");
const UserData = require("../models/transaction");

module.exports = class UserDataService{
    static async getAllData(limit){
        let data = []
        try {
            if (limit == 0) {
                data = await  UserData.find();

            } else {
                data = await  UserData.find().sort({_id:1}).limit(limit);

            }
            return data;
        } catch (error) {
            console.log(`Could not fetch data ${error}`)
        }
    }

    static async createUserData(data){
        try {

            let apps = JSON.stringify(data.Apps);
            apps =  JSON.parse(apps);
            apps = new Array(apps)
            console.log(apps)
            
            const newData = {
                userID: data.userID,
                price: data.price,
                qty: data.qty
            }
           const response = await new UserData(newData).save();
           return response;
        } catch (error) {
            console.log(error);
        } 

    }
    static async getUserDatayId(UserID){
        try {
            const singleResponse =  await UserData.findById({username: UserID});
            return singleResponse;
        } catch (error) {
            console.log(`User not found. ${error}`)
        }
    }

    static async updateUserData(title, body, articleImage){
            try {
                const updateResponse =  await UserData.updateOne(
                    {title, body, articleImage}, 
                    {$set: {date: new Date.now()}});

                    return updateResponse;
            } catch (error) {
                console.log(`Could not update data ${error}` );

        }
    }

    static async deleteUserData(UserID){
        try {
            const deletedResponse = await UserData.findOneAndDelete(UserID);
            return deletedResponse;
        } catch (error) {
            console.log(`Could  ot delete data ${error}`);
        }

    }
}