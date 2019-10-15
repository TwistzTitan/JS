const db = require('./iblue-mongoose')
const validation = require('validator')

const Planets = db.model('Planets',{
    name:{
        type: String,
        required:true,
        unique:true,
        minlength:1,
        maxlength:15,
        validate:{
        	validator: async(v)=>{
        		if(validation.isEmpty(v)){

        			reject(false)
        		}
        		if(validation.isJSON(v)){
        			reject(false)
        		}
        		resolve(true)
        	}
        }

    },
    climate:{
        type: String,
        required:true,
        minlength:1,
        maxlength:15,
        validator:()=> {

        }
    },
    land:{
        type: String,
        required:true,
        minlength:1,
        maxlength:15,
        validator:()=>{

        }
    }
},'Planets')

module.exports = {Planets}