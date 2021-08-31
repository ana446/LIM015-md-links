#!/usr/bin/env node
const {allLinksOfApi} = require('./validateCli.js');
const {totalAndUniqueOfLinksStats, brokenOfLinksStats} = require('./stats.js');
const {optionDefault, optionValidate} = require('./options.js');
const {userHelper} = require('./userHelper.js');
const process = require('process');

const dato = process.argv;
const inputPathOfCli = dato.length;
const inputPath = allLinksOfApi(dato[2])

if(dato[2]=== '--help'){ console.log(userHelper())}

inputPath.then((allArrayOfStatus)=>{
  switch(inputPathOfCli){
    case 3: 
    if(dato.length === 3){console.log(optionDefault(allArrayOfStatus))}
    break;
    case 4:
      if ((dato[3] === '--validate') && (dato.length === 4)){console.log(optionValidate(allArrayOfStatus))}
      else if((dato[3] === '--stats') && (dato.length === 4)){console.log(totalAndUniqueOfLinksStats(allArrayOfStatus))}
      else {console.log(userHelper())}
    break;
    case 5:
      if ((dato[3] === '--validate') && (dato[4] === '--stats') && (dato.length === 5)){        
        console.log(totalAndUniqueOfLinksStats(allArrayOfStatus))
        console.log(brokenOfLinksStats(allArrayOfStatus))}
      else if((dato[3] === '--stats') && (dato[4] === '--validate') && (dato.length === 5)){
        console.log(totalAndUniqueOfLinksStats(allArrayOfStatus))
        console.log(brokenOfLinksStats(allArrayOfStatus))}
        else{console.log(userHelper())}
    break;
    default: console.log(userHelper());
  }}).catch((error)=> console.log(error))
  // console.log(error) )











