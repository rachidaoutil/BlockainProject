const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const dataschema = Schema({

    userID:{
        type: String,
        required: true,
    },

    From:{
        type: String,
        required: true,
    },

    To:{
        type: String,
        required: true,
    },


    qty : {                
        type:Number
    },

    date:{
        type: Date,
        default: Date.now(),
    }

});



module.exports = Article = mongoose.model("transfer", dataschema,"transfer");