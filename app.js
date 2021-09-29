console.log("Starting app.js");

const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === "add") {
  console.log(chalk.green("Adding note..."));
  notes.addingNote(title, body);
} else if (command === "remove") {
  console.log(chalk.yellow("Removing note..."));
  notes.removeNote(title);
} else if (command === "read") {
  console.log(chalk.green("Reading note..."));
  notes.readNote(title);
} else if (command === "list") {
  console.log(chalk.blue("Listing all notes..."));
  notes.getAll();
} else {
  console.log(chalk.red("Unknown command was used!"));
}
