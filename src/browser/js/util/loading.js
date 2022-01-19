'use strict';

var $ = require('jquery')

module.exports = {

  // Save list of todos on the server
show(elm){
        $(`#${elm}`).addClass("animate-pulse");   
        $(`#${elm}`).prop('disabled', true);
     
      
  },
hide(elm){
    $(`#${elm}`).removeClass("animate-pulse");    
    $(`#${elm}`).prop('disabled', false);
    
  
}




};
