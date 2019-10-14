const {Planets} = require('./iblue-model')

function createPlanet (array,callback){
    const Planet = new Planets({
        name:array['name'],
        climate:array['climate'],
        land:array['land']
    });

    Planet.save()
    .then((result)=>{
       callback(result)
    })
    .catch((error) => {
        callback(error)
    } 

    );
}


function findPlanet (data,callback){
    Planets.findOne({
        'name':data['name'],
    },(err,result)=>{
        if (err) {
            callback(err)
        }
        else{
            callback(result)
        }
    })
}
module.exports = {createPlanet,findPlanet}