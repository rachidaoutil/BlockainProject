const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const middleware = require('./verifytoken.js');
const {secret} = require('./config');
const base64url = require('base64url');

app = express();
app.post('/token',(req,res)=>{    
    if (req.token){
        res.send(req.token);
    }else{
        token = jwt.sign({username:'rachid'},secret)
        res.json((token));
    }


})

app.listen(8000);