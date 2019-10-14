const request = require('request')
const validator = require('validator');
const cred = require ('./credentials.js'); 

// GET methods 

const findPlanet = (data,callback)=> {
    console.log(data)
        request.post({url:'http://localhost:9080/find', form:{name:data['name']}},(err,resp,body)=>{
                if(body !== null ){ 
                console.log(body)
                callback(body)
                }
            }
        )
}

// POST methods 

const createPlanet = (data)=> {

    request({url:"http://localhost:9080/create",json:true},(err,resp,body)=>{
                           console.log(err)
                           console.log(resp.statusCode)
                           console.log(body)
   })
}

// DELETE methods 


// PATCH methods (update planets)



module.exports = {findPlanet}