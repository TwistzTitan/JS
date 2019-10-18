const credentials = { 
    login:"planet_app",
    pass:"iblueplanet",
    db:'test'
}

const url = "mongodb+srv://"+credentials.login+":"+credentials.pass+"@tw-mgdb-001-3snfd.mongodb.net/test?retryWrites=true&w=majority"

module.exports = url 
