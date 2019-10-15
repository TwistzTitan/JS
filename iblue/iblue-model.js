const db = require('./iblue-mongoose')
const validation = require('validator')

const Planets = db.model('Planets',{
    name:{
        type: String,
        required:true,
        minlength:1,
        maxlength:15,
        validate:{
        	validator: (v)=>{
        		if(validation.isEmpty(v)){
                    return false
        		}
        		if(validation.isJSON(v)){
        			return false
        		}
        		    return true
        	}
        }

    },
    climate:{
        type: String,
        required:true,
        minlength:1,
        maxlength:15,
        //validator:()=> {

        //}
    },
    land:{
        type: String,
        required:true,
        minlength:1,
        maxlength:15,
        //validator:()=>{

        //}
    }
},'Planets')

module.exports = {Planets}