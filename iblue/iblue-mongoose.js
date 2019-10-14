const db = require('mongoose');
const url = require('./credentials.js'); 
const validator = require('validator')

db.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    }); 
    
module.exports = db