const notes = require('./notes.js')
const fileName = 'Morpheus'
const validator = require(validator);

notes.getNote(fileName);
notes.setNote(fileName);

console.log(validator.isEmail('twistz@titan.com.br'));
