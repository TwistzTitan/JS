const fs = require ('fs');
const chalk = require('chalk');

class Note {
    
    constructor(tit, com){
        this.title = tit;
        this.comment = com;
    }

    getNote(){
        const noteJSON = {
            title:this.title,
            comment:this.comment
        }
        return noteJSON;
    }
}


const loadNotes = (log) => {   
        try {
            const dbJSON = fs.readFileSync('./data.json');
            const dataJSON = dbJSON.toString();
            return JSON.parse(dataJSON);
            }
        catch (err){
            log = err;
            return []
           }
}

const listNotes = () => {
    let report = "";
    const dataJSON = loadNotes(report);
    if(dataJSON.length > 0){
        dataJSON.forEach((element) => {
            console.log(chalk.blue.bold(element.title));
            console.log(chalk.yellow.bold(element.comment));
        });
    }else{
        console.log("Not found!");
    }
} 

const saveNotes = (dbJSON,log) => {
    const dbMan = fs.openSync('./data.json','w');     
        try {
                fs.writeFileSync('./data.json',JSON.stringify(dbJSON));
            }
        catch (err){
                log = err;
           }
        finally{
                fs.closeSync(dbMan);
        }
}

const addNote = function (argTit, argCom) {
    let report = "";
    const note = new Note(argTit,argCom);
    const dbNotes = loadNotes(report);
    const notesFound =  dbNotes.filter(function (note){
        return note.title === argTit;
    })
    if(notesFound.length === 0){
    dbNotes.push(note);        
    saveNotes(dbNotes);
    console.log("Note saved!");
    }else{
        report = "Duplicated Notes";
    }
    console.log(chalk.green.inverse.bold(report));
}

const removeNote = function (arg) {
    const report = "";
    const dataJSON = loadNotes(report)
    const dataRemoveJSON = dataJSON.filter(function (note){
        return note.title !== arg;
    });

    if (dataRemoveJSON.length > 0){
        saveNotes(dataRemoveJSON);
        console.log(chalk.red.inverse.bold("Note removed!"))
    }
    else{
        if(dataJSON.filter((note)=>note===arg) && dataJSON.length === 1){
            dataJSON.pop(); 
            console.log(chalk.red.inverse.bold("ALL notes removed , empty DB!"))
            saveNotes(dataJSON);
        }
    }     
}

module.exports = {addNote,removeNote,listNotes}