const jwt = require('jsonwebtoken');
const {secret} = require('./config');

module.exports = function (req,res, next){
    console.log(req.headers)
    token = req.get('authorization') || req.get('x-access-token');
    if (token.startsWith('Bearer')){
        token = token.slice(7,token.length);
        req.token = token;
    }
    if (token){

    }

    return next()
}