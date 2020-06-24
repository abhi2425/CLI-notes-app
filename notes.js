const fs = require("fs");
const chalk = require("chalk");


module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNodes: listNodes,
    readNotes: readNotes
}


function loadNotes() {
    try {
        const data_Read = fs.readFileSync("book.json");
        const dataJSON = data_Read.toString();
        const data = JSON.parse(dataJSON);
        return data;
    } catch (error) {
        return [];
    }
}

function saveNotes(data) {
    fs.writeFileSync("book.json", JSON.stringify(data));

}

function addNotes(title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.find(item => item.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green("Notes Successfully Added"));
    } else {
        console.log(chalk.red("Title is Already Taken"));
    }

}

function listNodes() {
    const data = loadNotes();
    console.log(chalk.redBright.bgCyanBright("Your Notes!!"));
    data.forEach(item => {
        console.log(item.title);
    });
}

/*function titleChecker(data) {
    return (data.filter(function(item) {
        return item.title;
    }));
}*/

function removeNotes(title1) {

    const data = loadNotes();
    const datatokeep = data.filter(item => { return item.title !== title1 })
    const datatoremove = data.filter(item => { return item.title === title1 })
    if (datatoremove.length === 0) {
        console.log(chalk.redBright(`no book with ${title1}--is found`));
    } else {
        console.log(chalk.greenBright("Successfully Removed"));
    }
    saveNotes(datatokeep);

}

function readNotes(title) {
    const data = loadNotes();
    try {
        const validNote = data.filter(item => { //we can also use here find() method 
            return item.title === title;
        });
        if (validNote) {

            console.log(chalk.greenBright.bgMagenta(`Title: ${validNote[0].title}`));
            console.log(validNote[0].body);
        } else {
            console.log(chalk.redBright(`No Such File With Title-${title} `));
        }

    } catch (error) {
        console.log(chalk.bgRed("Not Such File Found"))
    }

}