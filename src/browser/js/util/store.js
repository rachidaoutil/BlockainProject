'use strict';

var $ = require('jquery')
const alerts = require('./alerts');
const laod = require('./loading');



module.exports = {
  // Fetch todos from server
  fetch(callback) {
    $.ajax('/data').done(function(data) {
      callback(null, data);
    }).fail(function(xhr, status, error) {
      callback(error);
    });
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
      // new Todo!
      laod.show("loginbtn")
      $.ajax('/loginauth', {
        method: 'POST',
        data: user
      }).done((data) =>{

        if (data._id) {
          alerts.showConfirmation("réussie!");
          
        } else {

          alerts.showAlert("Ops, somthing is not right!");

        }

        laod.hide("loginbtn")


        callback(null,data._id);


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
