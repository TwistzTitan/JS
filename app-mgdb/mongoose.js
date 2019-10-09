const db = require('mongoose');
const url = require('./credentials.js'); 

db.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true
    }); 
const Planets = db.model('Planets',{
    name:{
        type: String,
    },
    temperature:{
        type: Number,
    },
    distance:{
        type: Number,
    }
},'Planets')

const Plutao = new Planets({
    name:"Plutao",
    temperature: -20,
    distance:"98641"
});

Plutao.save()
.then((result) => {
    
    console.log("Document saved!\nSuccess message: "+result);
})
.catch((error) => {
    console.log("Document not saved!\nError nessage"+error)
} 

);
