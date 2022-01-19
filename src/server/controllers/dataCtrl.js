const UserService = require("../services/MarketDataService");



module.exports = class User{

   static async apiGetData(req, res, next){
       try {
         const data = await UserService.getAllData(7);

         if(!data){
            res.status(404).json("There are no such User!")
         }

         res.send(data);
       } catch (error) {
          res.status(500).json({error: error})
       }

   }

   static async apiGetDataByUser(req, res, next){
      try {
         let id = req.body.id || {};
         const data = await UserService.getDatabyId(id);
         res.json(data);
      } catch (error) {
         res.status(500).json({error: error})
      }
   }

   static async apiCreateMarketData(req, res, next){
      try {
         const createdUserData =  await UserService.createUserData(req.body);
         res.json(createdUserData);
      } catch (error) {
         res.status(500).json({error: error});
      }
   }

   static async apiUpdateUserData(req, res, next){
      try {
         const UserData = {}
         User.username        = req.body.username;
         User.email         = req.body.email;
         User.fullname = req.body.fullname

         const updatedUserData = await UserService.updateUserData(UserData);

         if(updatedUser.modifiedCount === 0){
            throw new Error("Unable to update User, error occord");
         }

         res.json(updatedUser);

      } catch (error) {
         res.status(500).json({error: error});
      }
   }

   static async apiDeleteUserData(req, res, next){
         try {
            const UserDataID = req.body.id;
            const deleteResponse =  await UserService.deleteUser(UserDataID)
            res.json(deleteResponse);
         } catch (error) {
            res.status(500).json({error: error})
         }
   }

}


function isEmpty(str) {
  return (!str || str.length === 0 );
}