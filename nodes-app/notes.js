const fs = require('fs')
const chalk = require('chalk')
log = console.log
const getNotes = function(){
    return 'Your notes is...';
}

const addNotes = function (title, body) {
     const notes = loadNotes()
     const duplicateNotes = notes.filter(function(note){
         return note.title === title
     })
     if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
     } 
     else{
         log('duplicate notes!')
     }   
}

const saveNotes = function(notes){
    try{
        fs.writeFileSync('notes.json', JSON.stringify(notes))
    }catch(e){
        log(str(e))
    }
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch(e)
    {
        return []
    }
    
}

const removeNotes = function(title){
    const notes = loadNotes()
    const filtered_notes = notes.filter(function(note){
        return note.title != title
    })
    log(filtered_notes)
    if(notes.length > filtered_notes.length){
        saveNotes(filtered_notes)
        log(chalk.bgGreen('removed succesfully'))
    }
    else{
        log(chalk.bgRed('no such notes found'))
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
}