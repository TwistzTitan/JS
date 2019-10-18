const {Planets} = require('./iblue-model')

function createPlanet (array,callback){
    const Planet = new Planets({
        name:array['name'],
        climate:array['climate'],
        land:array['land']
    })

    if (Planet){
        Planet.save()
        .then((result)=>{
        callback(undefined,result)
        })
        .catch((error) => {
            callback(error,undefined)
        }) 
    }
}


function findPlanet (data,callback){
    Planets.findOne({
        'name':data['name']
    },(err,result)=>{
        if (err) {
            callback(err)
        }
        else{
            callback(result)
        }
    })
}

function findPlanetByID (data,callback){
    Planets.findById({
        '_id':data
    },(err,result)=>{
        if (err) {
            callback(err)
        }
        else{
            callback(result)
        }
    })
}

function listPlanet (data,callback){
    Planets.find({
    },(err,result)=>{
        if (err) {
            callback(err)
        }
        else{
            callback(result)
        }
    })
}


function updatePlanet (data,callback){
    Planets.updateOne({name:data[0].name},
                   {$set:{name:data[1].name,climate:data[1].climate,land:data[1].land}},(err,response)=>{
            if(err){
                callback(err,undefined)
            }
            else{
                callback(undefined,response)
            }
        })
}

function removePlanet(data,callback){
    Planets.deleteOne({name:data['name']})
    .then((res)=>{
        callback(res)})
    .catch((err)=>callback(err))
}

module.exports = {createPlanet,findPlanet,removePlanet,updatePlanet,listPlanet,findPlanetByID}