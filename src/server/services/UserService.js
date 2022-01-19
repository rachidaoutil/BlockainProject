const User = require("../models/user");

module.exports = class UserService{
    static async getAllUsers(){
        try {
            const allUsers = await  User.find();
            return allUsers;
        } catch (error) {
            console.log(`Could not fetch User ${error}`)
        }
    }

    static async createUser(data){
        try {

            const newUser = {
                username: data.username,
                email: data.email,
                password: data.password,
                fullname: data.fullname
            }
           const response = await new User(newUser).save();
           return response;
        } catch (error) {
            console.log(error);
        } 

    }
    static async getUserById(UserID){
        try {
            const singleUserResponse =  await User.findOne({username: UserID});
            return singleUserResponse;
        } catch (error) {
            console.log(`User not found. ${error}`)
        }
    }

    static async updateUser(username, email, fullname){
            try {
                const updateResponse =  await User.updateOne(
                    {username}, 
                    {$set: {email,fullname} });

                    return updateResponse;
            } catch (error) {
                console.log(`Could not update User ${error}` );

        }
    }

    static async deleteUser(UserId){
        try {
            const deletedResponse = await User.findOneAndDelete(UserId);
            return deletedResponse;
        } catch (error) {
            console.log(`Could  ot delete User ${error}`);
        }

    }
}