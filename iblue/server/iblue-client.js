const axios = require('axios')

// POST METHODS

const listPlanet = async (data,callback) => {
    try{
        const result  = await axios.post('http://localhost:9080/list',{'name':data})
        callback(undefined,result)
    }   
    catch(err){
        callback(err,undefined)
    }
}

const findPlanet = async (data,callback) => {
    try{
        const result  = await axios.post('http://localhost:9080/find',{'name':data})
        callback(undefined,result)
    }   
    catch(err){
        callback(err,undefined)
    }
}

const createPlanet = async (data,callback) => {
    try{
        const result  = await axios.post('http://localhost:9080/create',{'name':data.name,'climate':data.climate,'land':data.land})
        callback(undefined,result)
    }   
    catch(err){
        callback(err,undefined)
    }
}



//DELETE METHODS

const deletePlanet = async (arg,callback) => {
    try{
        const result  = await axios.delete('http://localhost:9080/delete',{data:{'name': arg}})
        callback(undefined,result)
    }   
    catch(err){
        callback(err,undefined)
    }
}



// UPDATE METHODS

const updatePlanet = async (data,callback) => {
    try{
        const result  = await axios.patch('http://localhost:9080/update/'+data.planet+'',{'name':data.name,'climate':data.climate,'land':data.land})
        callback(undefined,result)
    }   
    catch(err){
        callback(err,undefined)
    }
}

// GET METHODS

const findPlanetByID = async (data,callback) => {
    try{
        const result  = await axios.get('http://localhost:9080/find/'+data)
        callback(undefined,result)
    }   
    catch(err){
        callback(err,undefined)
    }
}



module.exports = {findPlanet,listPlanet,createPlanet,deletePlanet,updatePlanet,findPlanetByID}