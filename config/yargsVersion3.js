
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Agrega una base a la tabla de multiplicar'
    })

    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        describe: 'Muestra la tabla en consola'
    })

    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        demandOption: false,
        describe: 'Agrega un limite a la tabla'
    })

    .option('g', {
        alias: 'guardar',
        type: 'string',
        demandOption: false,
        default: 'Salida',
        describe: 'guarda el archivo generado en una ubicacion'
    })


    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que se ser un número'
        }
        return true;
    })
    .argv


module.exports = argv;