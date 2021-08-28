#!/usr/bin/env node
const {allLinksOFApi} = require('./validateCli.js');
const {existInputFilePath}=require('./api.js')
const {totalAndUniqueOfLinksStats, brokenOfLinksStats} = require('./stats.js');
const {optionDefault, optionValidate} = require('./options.js');
const {userHelper} = require('./userHelper.js');
const process = require('process');

const dato = process.argv;
const inputPathOfCli = dato.length;
const inputPath = allLinksOFApi(dato[2])
console.log(!existInputFilePath(dato[2]));

if(dato[2]=== '--help'){ console.log(userHelper())}

inputPath.then((allArrayOfStatus)=>{
  switch(inputPathOfCli){
    case 3: 
    if(dato.length === 3){optionDefault(allArrayOfStatus)}
    break;
    case 4:
      if ((dato[3] === '--validate') && (dato.length === 4)){optionValidate(allArrayOfStatus)}
      else if((dato[3] === '--stats') && (dato.length === 4)){totalAndUniqueOfLinksStats(allArrayOfStatus)}
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











