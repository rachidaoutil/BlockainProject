'use strict';

const mongoose = require("mongoose");
const Transaction = require('./models/transaction')
const buyorder = require('./models/buyorder')
const sellorder = require('./models/sellorder')



let io;
let users;

// Initialize with provided socket.io instance


exports.init = function(_io) {
mongoose.connect("mongodb+srv://MyApps:Kj8qg55DbYB4cWMb@cluster0.ytrbe.mongodb.net/block", {useNewUrlParser: true, useUnifiedTopology: true })
.then((res)=> 
{
  console.log(`Connection Succesful ${res}`)
  io = _io;
  io.on('connection',(socket)=>{
    console.log('user connected')
    socket.on('joinRoom',(data)=>{      // data will look like => {myID: "123123"}
        console.log('user joined room')
        socket.join(data.myID)          

    Transaction.watch().on('change',(change)=>{
      console.log('Something has changed')
      if(change.fullDocument.status ==="Completed"){
          io.to(change.fullDocument._id).emit('orderCompleted',change.fullDocument)
      }else if(change.fullDocument.status ==="Canceled"){
          io.to(change.fullDocument._id).emit('orderCanceled',change.fullDocument)
      }else{
         io.to(change.fullDocument._id).emit('change',change.fullDocument)
      }
    })
    buyorder.watch().on('change',(change)=>{
        console.log('Something has changed')
        io.to(change.fullDocument._id).emit('change',change.fullDocument)

    })
    sellorder.watch().on('change',(change)=>{
      console.log('Something has changed')
      io.to(change.fullDocument._id).emit('change',change.fullDocument)

  })

    
})})})
.catch(err => console.log(`Error in DB connection ${err}`));

}

exports.todoAdded = function(todo) {

  io.emit('todoAdded', todo);

};

exports.tododel = function (todo) {

  console.log('emit delete');
  io.emit('delete',todo);
}
exports.updatetodo = function(todo){

  io.emit('update',todo);
}
