const express = require('express');
const  testapp = express();
const fs = require('fs');

testapp.use(express.json);
testapp.use(express.urlencoded({extended: true}));

testapp.get('/planet',(req,res) => {

    const file = fs.readFileSync('./planet') 
    
});

testapp.listen(8070,function (){

    console.log('Hello');
});