const {join} = require('path')
const express = require('express'); 
const app = express();
const port = process.env.port || 9080;
const {createPlanet,findPlanet,removePlanet,updatePlanet} = require('./iblue-mgdb-ops.js')
const publicDir = join(__dirname,'../public')

app.set('view engine','hbs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(publicDir))

app.get('/search',(req,res)=>{
    res.render('search')
})

app.get('/find',(req,res)=>{
    console.log(req.params)
    const data = {"name":req.query.name,"climate":req.query.climate,"land":req.query.land};
        findPlanet(data,(result)=>{
            //result !== null ? res.json(result).status(200) : res.status(404)]
            res.render('find',{FindArray:[result.name,result.climate,result.land]})
        })    
}).post('/find',(req,res)=> {
    const data = {"name":req.body.name,"climate":req.body.climate,"land":req.body.land};
    findPlanet(data,(result)=>{
        result !== null ? res.json(result).status(200) : res.status(404)
    })
})
app.post('/form-find',(req,res)=> {

    const data = {"name":req.body.name,"climate":req.body.climate,"land":req.body.land};
    findPlanet(data,(result)=>{
        res.render('find',{FindArray:[result.name,result.climate,result.land]})
        res.status(200)

    })
})
app.post('/create',(req,res)=>{
    const body = req.body 
    createPlanet(body,(err,result)=>{
        if(err){
            res.status(406).send("Try again validation error")
        }
        res.json(result).status(200)
    })
})
app.delete('/delete',(req,res)=>{
    const body = req.body
    removePlanet(body,callback(res,count)=>{
        res.status(202).send("Deleted: "+count+" docs")
    })
    .catch((err)=>{
        res.status(404).send(200)
    })


})
app.listen(port,function (){
    console.log('App running at port: '+port)
});
