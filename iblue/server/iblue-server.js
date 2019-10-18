const {join} = require('path')
const express = require('express'); 
const app = express();
const cors = require('cors')
const validator = require('validator')
const port = process.env.port || 9080;
const {createPlanet,findPlanet,removePlanet,updatePlanet,listPlanet,findPlanetByID} = require('./iblue-mgdb-ops.js')
const publicDir = join(__dirname,"../public/")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(publicDir))

app.get('/find',(req,res)=>{
    const data = {"name":req.query.name,"climate":req.query.climate,"land":req.query.land};
        findPlanet(data,(result)=>{
            result !== null ? res.json(result).status(200) : res.status(404).json(result)
        })
    
})
app.post('/find',(req,res)=> {
    const data = {"name":req.body.name,"climate":req.body.climate,"land":req.body.land};
    findPlanet(data,(result)=>{
        result !== null ? res.json(result).status(200) : res.status(404).json(result)
    })
})
app.get('/find/:id',(req,res)=>{
    const data = req.params.id
        findPlanetByID(data,(result)=>{
            result !== null ? res.json(result).status(200) : res.status(404).json(result)
        })
    })

app.post('/list',(req,res)=> {
    const data = {"name":req.body.name,"climate":req.body.climate,"land":req.body.land};
    listPlanet(data,(result)=>{
        result !== null ? res.json(result).status(200) : res.status(404).json(result)
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
    removePlanet(body,(resp)=>{
        resp.n > 0 ? res.status(202).json(resp): 
                     res.status(402).json('Planet not removed');
            
    })
})

app.patch('/update/:planet',(req,res)=>{
    const planet = req.params.planet
    const body = req.body
    const data = [{"name":planet},{"name":body.name,"climate":body.climate,"land":body.land}]
    validator.isEmpty(body.name) == true ? res.status(412).json({report:"Field Empty"}) :  
    validator.isEmpty(body.climate) == true? res.status(412).json({report:"Field Empty"}) :
    validator.isEmpty(body.land) == true ? res.status(412).json({report:"Field Empty"}) : updatePlanet(data,(err,resp)=>{
        if(err || resp.ok == 0) res.status(412).json(resp)
        res.status(202).json(resp)
    }) ; 
    
})

app.get(/.*/,(req,res)=>{
    res.sendFile(publicDir+"/index.html")
})

app.listen(port);
