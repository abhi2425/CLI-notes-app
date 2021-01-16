const yargs = require('yargs')
const { listNotes, removeNotes, addNotes, readNotes } = require('./notes')
yargs.command({
  command: 'add',
  describe: 'Adding a note',
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
  describe: 'listing all notes',
  handler: function () {
    listNotes()
  },
})

yargs.command({
  command: 'remove',
  describe: 'Deleting a note',
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

yargs.command({
  command: 'read',
  describe: 'reading a note',
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
