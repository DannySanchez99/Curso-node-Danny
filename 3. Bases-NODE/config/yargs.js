const { demandOption } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'limitar',
        type: 'boolean',
        demandOption: true,
        demand: false,
        describe: 'Es la impresion de la tabla de multiplicar en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta donde multiplicaremos la tabla'
    })
    .check( (argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser numerica'
        }
        return true
    })
    .argv;

module.exports = argv;