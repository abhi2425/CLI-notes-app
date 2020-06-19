const yargs = require("yargs");
const notes = require("./notes");
yargs.command({
    command: "add",
    descibe: "Adding A nOte",
    builder: {
        title: {
            descibe: "This is My Title",
            demandOption: true,
            type: "string"
        },
        body: {
            descibe: "This is My Body",
            type: "string"
        }

    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body);
    }
})

yargs.command({
    command: "list",
    descibe: "listing A nOte",
    handler: function() {
        notes.listNodes();
    }
})

yargs.command({
    command: "remove",
    descibe: "Deleting A nOte",
    builder: {
        title: {
            descibe: "This is My Title",
            demandOption: true,
            type: "string"
        }

    },
    handler(argv) {
        notes.removeNotes(argv.title);
    }
})
debugger;
yargs.command({
    command: "read",
    descibe: "reading A nOte",
    builder: {
        title: {
            describe: "Title",
            type: "string",
            demandOption: true
        }
    },
    handler(argv) {
        notes.readNotes(argv.title);
    }
})

yargs.parse();