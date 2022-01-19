const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = Schema({

    username:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },

    fullname: {
        type: String,
        required: false,
    },

    date:{
        type: Date,
        default: Date.now(),
    }

});



module.exports = Article = mongoose.model("users", userSchema,"users");