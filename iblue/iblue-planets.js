const yargs = require ('yargs')
const chalk = require('chalk')
const validator = require('validator')
const request = require ('request')  

yargs
    .command("create",chalk.blue.bold('Command to create planets'),{},
            ()=> {
                yargs
                .command({
                    command:"planet",
                    describe: chalk.blue.bold('Define planet parameters'),
                    builder:{
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
                    handler: async ()=>{}

                    }
                ).number(['climate'])
                .demandOption(['name','climate','land'])
                .demandCommand(1,"Insert create command before").argv
                
            }
    )
    .choices(['planet']).argv

    yargs
    .command("find",chalk.blue.bold('Command to find planets'),{},
            ()=> {
                yargs
                .command({
                    command:"planet",
                    describe: chalk.blue.bold('Define planet parameters'),
                    builder:{
                        name:{
                            describe:'Name of a planet',
                            type:String,
                        },
                        climate:{
                            describe:'Climate of a planet',
                            type:Number,
                        },
                        land:{
                            describe:'Land of a planet',
                            type:String,
                        }
                    },
                    handler:async ()=>{
                        request({url:"http://localhost:9080/find?name="+yargs.argv.name,json:true},(err,resp,body)=>{
                            console.log(err)
                            console.log(resp.statusCode)
                            console.log(body)
                        })
                    }
                      
                    }
                )
                .demandCommand(1,"Insert find command before")
                .demandOption(['name'])
            }
    )
    .choices(['planet'])
    .argv

    yargs
    .command("remove",chalk.blue.bold('Command to remove planets'),{},
            ()=> {
                yargs
                .command({
                    command:"planet",
                    describe: chalk.blue.bold('Define planets parameters'),
                    builder:{
                        name:{
                            describe:'Name of a planet',
                            type:String,
                            demandOption:true,
                        },
                       
                    },
                    handler:()=>{

                    }}
                )
                .demandCommand(1,"Insert remove command before")
            }
    )
    .choices(['planet']).argv;

    yargs
    .command("update",chalk.blue.bold('Command to update planets'),{},
            ()=> {
                yargs
                .command({
                    command:"planet",
                    describe: chalk.blue.bold('Define planets parameters'),
                    builder:{
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
                    handler:()=>{
                        
                    }}
                )
                .demandCommand(1,"Insert update command before")
            }
    )
    .choices(['planet']).argv
    

    if (yargs.argv._ == "")
        yargs.showHelp();
    
    yargs.exit(1)
    