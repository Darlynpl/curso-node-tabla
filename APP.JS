const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

// console.log(process.argv);
console.log(argv);



// const [ , , arg3 = 'base=5']=process.argv;
// const [ , base = 5] = arg3.split('=');


// const base = 5;

 crearArchivo( argv.b, argv.l, argv.h )
     .then( nombreArchivo => console.log((nombreArchivo.cyan, 'creado')))
     .catch( err => console.log(err));