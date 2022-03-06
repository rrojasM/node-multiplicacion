const argv = require('./config/yargs');
const colors = require('colors');
const { crearArchivoTabla } = require('./helpers/multiplicar');

console.clear();
/* 
console.log(argv);
console.log('Yars Base', argv.base);
 */

/* const [,,arg3='base=5'] = process.argv;
const [, base = 5] = arg3.split('='); */


/* let base = 55; */

crearArchivoTabla(argv.base, argv.listar, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch(err => console.log(err));