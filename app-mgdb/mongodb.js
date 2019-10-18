const mongodb = require('mongodb');
const credential = require('./credentials');
const mongoClient = mongodb.MongoClient

mongoClient.connect(credential, {useNewUrlParser:true}, (error,client)=> {

    if(error){ 
        console.log("Failed to connect")
    }else{ 

        console.log("Server Hosted: "+client.s.options.srvHost);
    }

    const db = client.db(credential.db);
    db.collection('Planets').insertOne({
        name:"Marte",
        temperature:150,
        distance:15482,
    },(err) => {
        if(err){
            console.log(err);
        }else{
        console.log('Collection and documents created!')
        }
    }); 
    client.close(()=>{
        console.log("Connection closed!")
    })
});


