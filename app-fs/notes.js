const name = "TWISTz"
const fs = require ('fs'); 
const path = require ('path');
const setNote = (archName) => { 
    fs.writeFileSync(`${archName}`,'This note was create by module!');
    const thisPath = path.dirname(__dirname);
    console.log(`Here is the note path: ${thisPath}`); 

} 
const getNote = (text) => { 
    this.text = text; 
    console.log(`Hi ${name} this is the title of archive >> ${text}`);

}

module.exports = {setNote,getNote};