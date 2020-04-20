const ps = require('./utils')
const chalk = require('chalk')
const yargs = require('yargs')
const fs = require('fs')
const notes = require('./notes')

const log = console.log

yargs
    .command(
        'add',
        'add a note',
        {
            'title': {
                describe: "provide a title",
                demandOption: true,
                type: 'String'
            },
            'body': {
                describe: "provide the title content",
                demandOption: true,
                type: 'String'
            }
        },
        function (argv) {
            notes.addNotes(argv.title, argv.body);           
        }
    )
    .command(
        'remove',
        'remove a note',
        {
            'title': {
                describe: "provide a title",
                demandOption: true,
                type: 'String'
            }
        },
        function (argv) {
            notes.removeNotes(argv.title);           
        }
    )
    .command({
        command: 'list',
        desc: 'list all notes',
        handler: () => {
            console.log('to list the note')
        }
    })

    .command({
        command: 'read',
        desc: 'read the notes',
        handler: () => {
            console.log('reading the note')
        }
    }).argv

// yargs.command({ 
//     command: 'add',
//     describe: 'something to add',
//     handler: function(){
//         console.log('add function invoked')
//     }
// })

// fs.appendFileSync('notes.txt', 'soemthing in the notes')
// console.log(chalk.bgBlue(ps()))
// console.log(chalk.bold.bgCyanBright(ps()))
// console.log(ps())
// console.log('soemthing happened just now')
// console.log(process.argv)
// console.log(yargs.argv)
// yargs.version('1.1.1.1.1.1')
// console.log(yargs.argv.title)