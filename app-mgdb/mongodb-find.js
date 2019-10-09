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
    
    db.collection('Planets').find({name:"Mercurio"}).toArray((err, users)=>{
        if(err){
            console.log(err)
        }else{
            console.log(users)
            client.close(()=>{
                console.log("Document founded!")
            })
        }
    });
});