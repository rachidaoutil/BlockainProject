const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = Schema({

    Initiator: {
        type: String,
        required: true,
    },
    Beneficiary: {
        type: String,
    },
    credit: {
        type: Number,
    }
    ,
    date: {
        type: Date,
        default: Date.now(),
    }

});



module.exports = Balances = mongoose.model("wallets", userSchema, "Wallets");