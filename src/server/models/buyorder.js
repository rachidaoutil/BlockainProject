const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const dataschema = Schema({

    userID:{
        type: String,
        required: true,
    },

    price:{
        type: String,
        required: true,
    },

    qty : {                
        type:Array
    },

    date:{
        type: Date,
        default: Date.now(),
    }

});



module.exports = Article = mongoose.model("buyorders", dataschema,"buyorders");