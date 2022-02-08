const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const dataschema = Schema({

    userID: {
        type: String,
        required: true,
    },

    orderID: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    qty: {
        type: Number
    },

    date: {
        type: Date,
        default: Date.now(),
    }

});



module.exports = TXS = mongoose.model("txs", dataschema, "txs");