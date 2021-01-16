const yargs = require('yargs')
const { listNotes, removeNotes, addNotes, readNotes } = require('./notes')
yargs.command({
  command: 'add',
  describe: 'Adding A note',
  builder: {
    title: {
      describe: 'This is My Title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'This is My Body',
      type: 'string',
    },
  },
  handler(argv) {
    addNotes(argv.title, argv.body)
  },
})

yargs.command({
  command: 'list',
  describe: 'listing A note',
  handler: function () {
    listNotes()
  },
})

yargs.command({
  command: 'remove',
  describe: 'Deleting A note',
  builder: {
    title: {
      describe: 'This is My Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    removeNotes(argv.title)
  },
})
debugger
yargs.command({
  command: 'read',
  describe: 'reading A note',
  builder: {
    title: {
      describe: 'Title',
      type: 'string',
      demandOption: true,
    },
  },
  handler(argv) {
    readNotes(argv.title)
  },
})

yargs.parse()
