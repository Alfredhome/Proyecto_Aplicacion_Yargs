const { crearArchivo } = require(`./helpers/multiplicar5`)
const colors = require('colors')
const argv = require('./config/yargsVersion3')


console.clear();

/* console.log(argv); */

crearArchivo(argv.b, argv.l, argv.h, argv.g)
    .then(nombreArchivo => console.log(nombreArchivo.bgBlue.bold, 'Creado Exitosamente'))
    .catch(err => console.log(err));