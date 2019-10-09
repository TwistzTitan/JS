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
    
    db.collection('Planets').updateOne({'name':'Mercurio'},{
        $set:{
            distance:85234
        }
    })
    .then(() => {
        console.log('Document Update!');
        client.close();
    })
    .catch(() => {
        console.log('Document not update!');
        client.close();
    })
});