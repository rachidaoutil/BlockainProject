const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const dataschema = Schema({

    userID: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        required: true,
    },

    qty: {
        type: Number
    },

    price: {
        type: Number
    },

    transactions: [
        {
            TX: {
                type: String
            },
            qty: {
                type: Number
            },
        }
    ],

    date: {
        type: Date,
        default: Date.now(),
    }

});


module.exports = orders = mongoose.model("orders", dataschema, "orders");