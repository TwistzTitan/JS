const db = require('mongoose');
const url = require('./credentials.js'); 
const validator = require('validator')
db.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    }); 
const Planets = db.model('Planets',{
    name:{
        type: String,
    },
    climate:{
        type: String,
    },
    land:{
        type: String,
    }
},'Planets')
    
function createPlanet (array,callback){
                const Planet = new Planets({
                    name:array['name'],
                    climate:array['climate'],
                    land:array['land']
                });

                Planet.save()
                .then((result)=>{
                   callback(true)
                })
                .catch((error) => {
                    callback(false)
                    console.log("Document not saved!\nError nessage"+error)
                } 

                );
}
function findPlanet (data,callback){
    Planets.findOne({
        'name':data['name'],
    },(err,result)=>{
        if (err) {
            callback(false)
            throw Error (err)
        }
        else{
            callback(result)
        }
    })
}

module.exports = {createPlanet,findPlanet}