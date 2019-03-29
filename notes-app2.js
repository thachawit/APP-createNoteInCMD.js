const chalk = require('chalk')
const fs = require('fs')
const getnote = (a,b)=> {return  a+b
}

const loadnote =()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
 
      }catch(e) {
        return [] 
      }         
   }

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const addnote =(title,body)=>{
    const notes = loadnote()
    const duplicatenote = notes.find((note) => note.title === title
    )
   
   if (!duplicatenote){
    notes.push({
        title : title,
        body : body
    })
    saveNotes(notes)
    console.log(chalk.inverse.green('New note added!'))
    }   else{
    console.log(chalk.bgBlue('note title has already taken!!'))
    }
}

const removenote =(title)=>{
    const notes = loadnote()
    const notestokeep = notes.filter((note) => note.title !== title
  )
    if(notes.length>notestokeep.length){
    saveNotes(notestokeep)
    console.log(chalk.green('note removed'))
    }else{
        console.log(chalk.bgRed('no note to remove'))
    } 
}


const listnote =() => {
    console.log(chalk.cyan.inverse('listing notes'))
    const data = loadnote()
    data.forEach((note)=>{
        console.log(note.title)  
    })
}

const readnote =(title,body) =>{
    const notes = loadnote()
    const duplicatenote = notes.find((note) => note.title === title)
    
    if(duplicatenote){
        console.log(chalk.green.inverse(duplicatenote.title))
        console.log(duplicatenote.body)
        
    }else{
        console.log(chalk.inverse.red('no note found!'))
    }
}
    



module.exports = {
    add : addnote,
    get : getnote,
    remove:removenote,
    list:listnote,
    read:readnote
    
}
