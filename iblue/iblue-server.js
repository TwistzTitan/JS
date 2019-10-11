const express = require('express'); 
const app = express();
const port = process.env.port || 9080;
const iblmgdb = require('./iblue-mongoose.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/find',function (req,res){

    const data = {"name":req.query.name,"climate":req.query.climate,"land":req.query.land};
        iblmgdb.findPlanet(data,(result)=>{
        result !== null ? res.json(result).status(200) : res.status(404)
    })
    
})
.post('/find',function (req,res){
    const test = req.body
    console.log(test['test'])
    res.json("{'test':'run'}")
})
app.listen(port,function (){
    console.log('App running at port: '+port)
});
