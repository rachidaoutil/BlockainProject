const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const dataschema = Schema({


    period: {                
        type:Number
    },
    beginTime: {                
        type:Number
    },
    endTime: {                
        type:Number
    },
    volume: {                
        type:Number
    },
    openPrice: {                
        type:Number
    },
    highPrice: {                
        type:Number
    },
    lowPrice: {                
        type:Number
    },
    closePrice: {                
        type:Number
    },
    medianPrice: {                
        type:Number
    },
    meanPrice: {                
        type:Number
    },

    date:{
        type: Date,
        default: Date.now(),
    }

});



module.exports = Article = mongoose.model("prices", dataschema,"prices");