'use strict';

var $ = require('jquery')
const alerts = require('./alerts');
const laod = require('./loading');



module.exports = {
  // Fetch todos from server
/*   fetchDash(callback) {
    $.ajax('/dashdata').done(function(Data) {
      callback(null, Data.data);
    }).fail(function(xhr, status, error) {
      callback(error);
    });
  }, */
    // Fetch todos from server
  fetch(callback) {
      $.ajax('/dashdata').done(function(data) {
        callback(null, data);
      }).fail(function(xhr, status, error) {
        callback(error);
      });
    },
  fetchDash(client, callback){
      if (client){

        // Add the "show" class to DIV
      
        // After 3 seconds, remove the show class from DIV
        // new Todo!
        $.ajax('/dashdata', {
          method: 'POST',
          data: client
        }).done((Data) =>{

          if (Data.statusCode) {
            alerts.showConfirmation(Data.msg);
            
          } else {
            alerts.showConfirmation(Data.msg);
  
          }
          callback(null,Data.data);
  
  

 

        }).fail(function(xhr, status, error) {

          alerts.showConfirmation("ops looks like something went wrong!");
          callback(error);

        });
      }
    
  },

  fetchOrdersData(client, callback){
    if (client){

      // Add the "show" class to DIV
    
      // After 3 seconds, remove the show class from DIV
      // new Todo!
      $.ajax('/ordersdata', {
        method: 'POST',
        data: client
      }).done((Data) =>{

        if (Data.statusCode) {
          alerts.showConfirmation(Data.msg);
          
        } else {
          alerts.showConfirmation(Data.msg);

        }
        callback(null,Data.data);





      }).fail(function(xhr, status, error) {

        alerts.showConfirmation("ops looks like something went wrong!");
        callback(error);

      });
    }
  
},


  getPrices(client=true, callback){
    if (client){

      // Add the "show" class to DIV
    
      // After 3 seconds, remove the show class from DIV
      // new Todo!
      $.ajax('/test', {
        method: 'GET',
        data: client
      }).done((Data) =>{

        if (Data.statusCode) {
          alerts.showConfirmation(Data.msg);
          
        } else {
          alerts.showConfirmation(Data.msg);

        }
        callback(null,Data);





      }).fail(function(xhr, status, error) {

        alerts.showConfirmation("ops looks like something went wrong!");
        callback(error);

      });
    }
  
},

  // Save list of todos on the server
  save(client, callback){
      if (client){

        // Add the "show" class to DIV
      
        // After 3 seconds, remove the show class from DIV
        // new Todo!
        $('.btn').addClass("loading")
        $.ajax('/order', {
          method: 'POST',
          data: client
        }).done((data) =>{

          if (data.statusCode) {
            alerts.showConfirmation("réussie!");
            laod.show("loginbtn")
            
          } else {
  
            alerts.showConfirmation("Ops its not you!");
            laod.hide("loginbtn")
            return;
  
          }

          callback(null,data);


        }).fail(function(xhr, status, error) {

          alerts.showConfirmation("ops looks like something went wrong!");
          laod.show("loginbtn")
          callback(error);

        });
      } else if (todo.id && todo.modified) {
        // update
        $.ajax('/todos/'+todo.id, {
          method: 'PUT',
          data: {
            title: todo.title,
            completed: todo.completed
          }
        }).done(function(data) {
          todo.modified = false;
          callback(null);
        }).fail(function(xhr, status, error) {
          callback(error);
        });
      }

    
  },

  send(client, callback){
    if (client){

      // Add the "show" class to DIV
    
      // After 3 seconds, remove the show class from DIV
      // new Todo!
      laod.show("sendbtn")

      $.ajax('/transfer', {
        method: 'POST',
        data: client
      }).done((Data) =>{
        laod.hide("sendbtn")


        if (Data.statusCode) {
          alerts.showConfirmation(Data.msg);
          
        } else {
          alerts.showConfirmation(Data.msg);

        }
        callback(null,Data.data);



      }).fail(function(xhr, status, error) {
        laod.hide("sendbtn")
        alerts.showErorr("ops looks like something went wrong!");
        callback(error);



      })
    }

  
  },

  buy(client, callback){
    if (client){

      // Add the "show" class to DIV
    
      // After 3 seconds, remove the show class from DIV
      // new Todo!
      laod.show("buybtn")

      $.ajax('/buy', {
        method: 'POST',
        data: client
      }).done((Data) =>{
        laod.hide("buybtn")


        if (Data.statusCode) {
          alerts.showConfirmation(Data.msg);
          
        } else {
          alerts.showConfirmation(Data.msg);

        }
        callback(null,Data.data);



      }).fail(function(xhr, status, error) {
        laod.hide("buybtn")
        alerts.showErorr("ops looks like something went wrong!");
        callback(error);



      })
    }


  },
  sell(client, callback){
    if (client){

      // Add the "show" class to DIV
    
      // After 3 seconds, remove the show class from DIV
      // new Todo!
      laod.show("sellbtn")

      $.ajax('/sell', {
        method: 'POST',
        data: client
      }).done((Data) =>{
        laod.hide("sellbtn")


        if (Data.statusCode) {
          alerts.showConfirmation(Data.msg);
          
        } else {
          alerts.showConfirmation(Data.msg);

        }
        callback(null,Data.data);



      }).fail(function(xhr, status, error) {
        laod.hide("sellbtn")
        alerts.showErorr("ops looks like something went wrong!");
        callback(error);



      })
    }


  },
  //SignIn
    // Save list of todos on the server
  AddUser(user, callback){
      if (user){

        // Add the "show" class to DIV
      
        // After 3 seconds, remove the show class from DIV
        // new Todo!
        laod.show("loginbtn")
        $('.btn').addClass("loading")
        $.ajax('/signup', {
          method: 'POST',
          data: user
        }).done((Data) =>{


          if (Data.statusCode) {
            alerts.showConfirmation(Data.msg);
            
          } else {
            alerts.showConfirmation(Data.msg);
  
          }
          callback(null,Data.data);
          laod.hide("loginbtn")


        }).fail(function(xhr, status, error) {
          laod.hide("loginbtn")
          alerts.showConfirmation("ops looks like something went wrong!");
          callback(error);

 
        });
      }

    
  },

  getUser(user, callback){
    if (user){

      // Add the "show" class to DIV
      // After 3 seconds, remove the show class from DIV
      
      laod.show("loginbtn")
      $.ajax('/loginauth', {
        method: 'POST',
        data: user
      }).done((Data) =>{

        if (Data.statusCode) {
          alerts.showConfirmation(Data.msg);
          
        } else {
          alerts.showConfirmation(Data.msg);

        }

        callback(null,Data.data);
        laod.hide("loginbtn")




      }).fail(function(xhr, status, error) {

        alerts.showErorr("ops looks like something went wrong!");
        laod.hide("loginbtn")
        callback(error);

 
      });
    }

  
},


  // Remove a TODO from the database
  remove(todos, callback) {
    todos.forEach(function(todo) {
      $.ajax('/todos/'+todo.id, {
        method: 'DELETE'
      }).done(function(data) {
        callback(null);
      }).fail(function(xhr, status, error) {
        callback(error);
      });
    });
  }
};
