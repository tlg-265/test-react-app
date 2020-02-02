const yargs = require('yargs');

const argv = yargs
    .option('project', {
        alias: 'p',
        description: 'name of the project',
        type: 'string',
    })
    .help()
    .alias('help', 'h')
    .argv;

let project = argv.project;

console.log(`########################`);
console.log(`###### The current project is: ${project} ######`);
console.log(`########################`);
