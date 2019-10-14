const db = require('./iblue-mongoose')

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

module.exports = {Planets}