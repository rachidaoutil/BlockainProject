const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = Schema({

    UserID:{
        type: String,
        required: true,
    },

    balance:{
        type: Double,
        required: true,
    },

    date:{
        type: Date,
        default: Date.now(),
    }

});



module.exports = Balances = mongoose.model("balances", userSchema,"balances");