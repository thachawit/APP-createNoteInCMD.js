const chalk = require('chalk')       #for making your notes look more beautiful
const yargs = require('yargs')       #npm module for receiving cmd argv
const shield = require('./app2.js')
const fs = require('fs')


//customize yargs vesion
yargs.version('1.1.0')



//create "add" command # when you adding note ,In cmd you have to add title(--title) and body(--body) according to the code is needed 
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }  
    },
    handler(argv) {
        shield.add(argv.title, argv.body) 
    } 
})

//create "remove" command 
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
            },
      }, 
   handler(argv){
       shield.remove(argv.title)
    }
})

//list the note
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler(){
       shield.list()
    }
})

//read the note
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
             }

        },
    handler(argv){
        shield.read(argv.title,argv.body)        
    }
})


//console.log(yargs.argv)
yargs.parse()
