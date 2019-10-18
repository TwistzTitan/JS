const db = require('mongoose');
const url = require('./credentials.js'); 


db.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    }).catch((err)=>{
    	console.log(err)
    }); 
    
module.exports = db