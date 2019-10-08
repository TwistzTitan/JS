const yargs = require('yargs');
const chalk = require('chalk');
const dbMan = require('./data-manager.js');
yargs.command({
    command:'add',
    describe:'Add register to DB',
    builder:{
        title:{
        describe:'Tittle note',
        demandOption:true,
        type:'string',
        },
        comment:{
            describe:'Comment note',
            demandOption:false,
            type:'string',
        }
    },
    handler: function (argv){
        dbMan.addNote(argv.title,argv.comment);
    }

});

yargs.command({
    command:'rm',
    describe:'Remove register from DB',
    builder:{
        title:{
        describe:'Tittle note',
        demandOption:true,
        type:'string',
        },
        
    },
    handler: function (argv){
        
        dbMan.removeNote(argv.title);
        
    }

});

yargs.command({
    command:'ls',
    describe:'List register from DB',
    builder:{
        title:{
        describe:'List register from DB',
        demandOption:false,
        type:'string',
        },
        
    },
    handler: function(){
        report = dbMan.listNotes();
    }

});



yargs.parse();
