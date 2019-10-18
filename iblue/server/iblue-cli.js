#!/usr/bin/env node
const yargs = require ('yargs')
const chalk = require('chalk')
const validator = require('validator')
const {findPlanet, listPlanet, createPlanet, deletePlanet, updatePlanet,findPlanetByID} = require('./iblue-client.js')


yargs.command('create',chalk.blue.bold('Command to create planets'),
                {            
                    name:{
                        describe:'Name of a planet',
                        demandOption:true,
                        type:String,
                    },
                    climate:{
                        describe:'Climate of a planet',
                        demandOption:true,
                        type:Number,
                    },
                    land:{
                        describe:'Land of a planet',
                        demandOption:true,
                        type:String,
                    }
                },
                async ()=>
                {
                    createPlanet(yargs.argv,(err,result)=> { 
                        if(err)console.log("Error to create file")
                        else{
                            console.log("\n\tID :"+result.data._id+"\n\tClimate :"+result.data.climate+"\n\tLand :"+result.data.land+"\n")
                        }
                    })
                }
            
            )
    .command('find',chalk.blue.bold('Command to find planets'),
                {
                    
                        name:{
                            describe:"Name of planet",
                            demandOption:true,
                            demandCommand:(1,'Insert <comand> find'),
                            type:String
                            
                        },
                        climate:{
                            describe:"Climate of planet",
                            demandCommand:(1,'Insert <comand> find'),
                            type:String
                        },
                        land:{
                            describe:"Land of planet",
                            demandCommand:(1,'Insert <comand> find'),
                            type:String
                        },
                        list:{
                            describe:"Option to list planets",
                            demandCommand:(1,'Insert <comand> find'),
                            type:Boolean
                        },
                        id:{
                            describe:"ID of planet",
                            demandCommand:(1,'Insert <comand> find'),
                            type:String,
                        }
                    
                },
                async ()=>{
                    if (yargs.argv.list){
                        listPlanet(yargs.argv.name,(err,result)=>{
                            if (err) console.log("Error on list")
                            else{
                            result.data.forEach(element => {
                                console.log("\n\tID :"+element._id+"\n\tClimate :"+element.climate+"\n\tLand :"+element.land+"\n")
                            });
                            }
                            
                        })
                    }
                    else{
                        if(yargs.argv.id){
                            
                            findPlanetByID(yargs.argv.id,(err,result)=>{
                                if(err)console.log('\n\tPlanet not find\n')
                                else{
                                    console.log("\n\tID :"+result.data._id+"\n\tClimate :"+result.data.climate+"\n\tLand :"+result.data.land+"\n")
                                }
                            })
                        }
                        else{
                            findPlanet(yargs.argv.name,(err,result)=>{
                                if(err)console.log('\n\tPlanet not find\n')
                                else{
                                    console.log("\n\tID :"+result.data._id+"\n\tClimate :"+result.data.climate+"\n\tLand :"+result.data.land+"\n")
                                }
                            })
                        }
                    }
                   
    })
    .command("delete",chalk.blue.bold('Command to update planets'),
                    {            
                        name:{
                            describe:'Name of a planet',
                            demandOption:true,
                            type:String,
                        }
                    },
                    async ()=>
                    {   
                        deletePlanet(yargs.argv.name,(err,result)=> { 
                            if(err)console.log("Error to delete file")
                            else{
                                console.log("\n\tPlanet deleted :"+result.data.deleteCount)
                            }
                        })
                    }
                
                )
    .command('update',chalk.blue.bold('Command to update planets'),
                {            
                    planet:{
                        describe:'Name of the planet to be updated',
                        demandOption:true,
                        type:String,
                    },
                    
                    name:{
                        describe:'New name of the planet',
                        type:String,
                    },
                    climate:{
                        describe:'New climate of a planet',
                        type:Number,
                    },
                    land:{
                        describe:'New land of a planet',
                        type:String,
                    }
                },
                async ()=>
                {
                    updatePlanet(yargs.argv,(err,result)=> { 
                        if(err)console.log("Error to update planet")
                        else{
                            console.log("\n\tPlanet updated :"+result.data.n+"\n")
                        }
                    })
                }
            
            )
            .argv

    if (yargs.argv._ == "")
        yargs.showHelp();
    
   // result.dataxit(result.data
    
   // resul