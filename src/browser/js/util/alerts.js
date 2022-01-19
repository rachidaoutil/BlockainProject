'use strict';

const { toast, snackbar } = require('tailwind-toast')

module.exports = {

  // Save list of todos on the server
showAlert(msg){
       
      toast()
      .default('hey!',msg)
      .with({
        duration: 3000,
        speed: 1000,
        positionX: 'end',
        positionY: 'top',
        color: 'bg-blue-500',
        fontColor:'Slate-50',
        fontTone: 200,
      

      })
      .show() //display with all parameters      console.log("Buy order is placed!")
      
  },
  showErorr(msg){
       
    toast()
    .danger('Hey!', msg)
    .with({
      duration: 3000,
      speed: 1000,
      positionX: 'end',
      positionY: 'top',
      color: 'bg-red-800',
      fontTone: 200
    })
    .show() //display with all parameters      console.log("Buy order is placed!")
    
},
showConfirmation(msg){
     
  toast()
  .success('Hey!', msg)
  .with({
    duration: 4000,
    speed: 1000,
    positionX: 'end',
    positionY: 'top',
    color: 'bg-green-800',
    fontTone: 200
  })
  .show() //display with all parameters      console.log("Buy order is placed!")
  
}





};
