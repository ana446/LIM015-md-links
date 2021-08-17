// const {pruebaStatusDos} = require('../src/index.js');
const process = require('process');
const dato = process.argv;
// const argvLength = process.argv.length;
// consola.log(argvLength);
console.log(dato.length);

dato.forEach(( index) => {
    console.log(`${index}`);
  });

// if(dato[2] === 'hola'){
//     console.log('vamos bien ');
// }



