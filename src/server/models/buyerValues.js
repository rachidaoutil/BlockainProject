const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const dataschema = Schema({

    userID: {
        type: String,
        required: true,
    },
    type: {
        type: String,
    },
    qty: {
        type: Number
    },

    price: {
        type: Number 
    },

    date: {
        type: Date,
        default: Date.now(),
    }

});


module.exports = orders = mongoose.model("buyerValues", dataschema, "buyerValues");