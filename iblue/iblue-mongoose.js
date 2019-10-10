const db = require('mongoose');
const url = require('./credentials.js'); 

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
    
function createPlanet (argName,argCli,argLand){
                const Planet = new Planets({
                    name:argName,
                    climate:argCli,
                    land:argLand
                });

                Planet.save()
                .then((result)=>{
                   return "Planet created"
                })
                .catch((error) => {
                    console.log("Document not saved!\nError nessage"+error)
                } 

                );
}
function findPlanet (argName,argCli,argLand){
    Planets.findOne({
        'name':argName,
    },(err,result)=>{
        if (err) throw Error (err)
        console.log("\n\tPlanet information:\n\tID:"+result.id+"\n\tName:"+result.name+"\n\tClimate:"+result.climate+"\n\tLand:"+result.land)
    })

}

module.exports = {createPlanet,findPlanet}