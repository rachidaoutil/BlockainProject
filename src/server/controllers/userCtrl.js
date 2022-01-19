const UserService = require("../services/UserService");

const reddisService = require("../services/reddisService");


module.exports = class User{

   static async apiGetUser(req, res, next){
       try {
         const users = await UserService.getAllUsers();
         if(!users){
            res.status(404).json("There are no such User!")
         }
         res.json(users);
       } catch (error) {
          res.status(500).json({error: error})
       }

   }

   static async apiGetUserById(req, res, next){
      console.log(req.body)
      try {
         let id = req.body.username || {};
         let pass = req.body.password;
         const user = await UserService.getUserById(id);
         
         console.log(user)

         if(!isEmpty(user)){
            if (user.password === pass) {
               reddisService.CreateToken(req,res,user.id);
               res.send(user)
            }else{
               res.send("Bad info!")
            }
         }else{
            res.send("Bad info!")
         }
      } catch (error) {
         res.status(500).json({error: error})
      }
   }

   static async apiCreateUser(req, res, next){
      let Data = {}
      try {
         let id = req.body.username || {};
         const user = await UserService.getUserById(id);
         if(!isEmpty(user)){
            Data = {
               statusCode:0,
               msg:"User Alrady Exist!"
            }
         }else{
            const createdUser =  await UserService.createUser(req.body);
            if(createdUser.id){
                 Data = {
                  statusCode:1,
                  msg:"Good",
                  data:createdUser
               }
            }else{
               Data = {
                  statusCode:0,
                  msg:"Faild please try Again!",

               }
            }
           
         }
        
      } catch (error) {
         Data = {
            statusCode:0,
            msg:error
         }
      }
      res.json(Data);

   }

   static async apiUpdateUser(req, res, next){
      try {
         const User = {}
         User.username        = req.body.username;
         User.email         = req.body.email;
         User.fullname = req.body.fullname

         const updatedUser = await UserService.updateUser(User);

         if(updatedUser.modifiedCount === 0){
            throw new Error("Unable to update User, error occord");
         }

         res.json(updatedUser);

      } catch (error) {
         res.status(500).json({error: error});
      }
   }

   static async apiDeleteUser(req, res, next){
         try {
            const UserID = req.params.id;
            const deleteResponse =  await UserService.deleteUser(UserID)
            res.json(deleteResponse);
         } catch (error) {
            res.status(500).json({error: error})
         }
   }

}





function isEmpty(str) {
  return (!str || str.length === 0 );
}