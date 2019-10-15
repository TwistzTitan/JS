const {Planets} = require('./iblue-model')

function createPlanet (array,callback){
    const Planet = new Planets({
        name:array['name'],
        climate:array['climate'],
        land:array['land']
    }).catch((err)=>{
        callback(err)
    })

    Planet.save()
    .then((result)=>{
       callback(result)
    })
    .catch((error) => {
        callback(error)
    }) 
    
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

function updatePlanet (data,callback){
    Planets.update({'name':data['name'],'climate':data['climate'],'land':data['land']},
                   {'name':data['nName'],'climate':data['nClimate'],'land':data['nLand']},
        {omitUndefined:true},(err,response)=>{
            if(err){
                callback(err)
            }
            else{
                callback(response)
            }
        })
}

function removePlanet(data,callback){
    Planets.deleteOne({'name':data['name'],'climate':data['climate'],'land':data['land']},(res,count)=> return callback(res,count))
    .catch((err)=>callback(err))
}

module.exports = {createPlanet,findPlanet,removePlanet,updatePlanet}