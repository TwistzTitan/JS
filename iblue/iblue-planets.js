const yargs = require ('yargs')
const chalk = require('chalk')
const iblmgdb = require('./iblue-mongoose.js')

//yargs.usage("$0 \n\n create [args]\n\n$0 update [args]\n\n$0 remove [args]\n\n$0 find [args]",
//chalk.blue.bold("Commands to manage planets "))
yargs
    .command("create",false,
            ()=> {
                yargs
                .command({
                    command:"planet",
                    describe: chalk.blue.bold('\nCommand to create planets'),
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
                        console.log(iblmgdb.createPlanet(yargs.argv.name,yargs.argv.climate,yargs.argv.land))
                    }}
                ).number(['climate'])
                .demandOption(['name','climate','land'])
                .demandCommand(1,"Insert create command before")
            }
    )
    .help()
    .choices(['planet']).argv;

    yargs
    .command("find",false,
            ()=> {
                yargs
                .command({
                    command:"planet",
                    describe: chalk.green.bold('\nCommand to find planets'),
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
                    handler:()=>{
                        setTimeout(()=>{
                            iblmgdb.findPlanet(yargs.argv.name,null,null);
                        },2000); 
                    }}
                )
                .demandCommand(1,"Insert find command before")
                .demandOption(['name'])
            }
    )
    .help()
    .choices(['planet']).argv;

    yargs
    .command("remove",false,
            ()=> {
                yargs
                .command({
                    command:"planet",
                    describe: chalk.red.bold('\nCommand to remove planets'),
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
    .help()
    .choices(['planet']).argv;

    yargs
    .command("update",false,
            ()=> {
                yargs
                .command({
                    command:"planet",
                    describe: chalk.blue.bold('\nCommand to upadate planets'),
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
    .help()
    .choices(['planet']).argv
    yargs.parse()