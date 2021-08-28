const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const chalk = require('chalk');
//converts a relative path to absolute
const isValidateAbsolute = (inputFilePath) => {
  
    const normalizedPath = path.normalize(inputFilePath);
    return path.isAbsolute(normalizedPath) ? normalizedPath : path.resolve(normalizedPath);
  
};
// const prueba = isValidateAbsolute('D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example11.md');
// const prueba = isValidateAbsolute('D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example1.js');
// const prueba = isValidateAbsolute('hola');
// const prueba = isValidateAbsolute('test');
// const prueba = isValidateAbsolute();
// console.log(prueba);

//path exist
const existInputFilePath = (inputFilePath) => fs.existsSync(inputFilePath);
// //is directory
const validateDirectory  = (inputFilePath) => fs.statSync(inputFilePath).isDirectory();
// console.log(validateDirectory('D:\\Laboratoria\\LIM015-md-links\\src\\anotherExample\\anotherExample2'));
// console.log(existInputFilePath(prueba));


//recursion function to loop through all directories
const getAllFiles = (inputFilePath, arrayOfFiles) => {
  
  arrayOfFiles = arrayOfFiles || [];
  
  
  if(fs.statSync(inputFilePath).isDirectory()){
    files = fs.readdirSync(inputFilePath);
    files.forEach((file) => {
      // console.log(file)
    if (fs.statSync(inputFilePath + '/' + file).isDirectory()) {
     arrayOfFiles = getAllFiles(inputFilePath + '/' + file, arrayOfFiles);
   } else {
    arrayOfFiles.push(path.join(inputFilePath, file));
    }
  })
  return arrayOfFiles;
  }else{
    return inputFilePath.split();
  }
  
};
// const result = getAllFiles(prueba);
// // console.log(typeof result);
// console.log({result});

//obtener todos los archivos .md
const getAllFilesMd = (inputFilePath, arrayOfFilesMd) => {

  arrayOfFilesMdd = arrayOfFilesMd || [];
  if(inputFilePath.length > 0) {
    inputFilePath.map((file) => {
      const filesMd = path.extname(file);
      if (filesMd === '.md') {
         arrayOfFilesMdd.push(path.join(file));
      }
      // else{
      //   arrayOfFilesMdd = []
      // }
    })
    return arrayOfFilesMdd
  }
}
// const arrOffMD = getAllFilesMd(result);
// console.log({arrOffMD});
// const esDirectorio = fs.readdirSync('D:\\Laboratoria\\LIM015-md-links\\src');
// console.log(esDirectorio);
//match(/https*?:([^"')\s]+)/)[0] (Match para url)
// match(/\[(.*)\]/)[1].substr(0, 49)    (Match para texto)
// /\[(.*)\]/)[1]/https*?:([^"')\s]+)/   Valores por defecto

//Leer un archivo e imprimir en consola 
const getAllLinksOfMd = (arrayOfFilesMd, linksOfFilesMd) => {
  linksOfFilesMd = linksOfFilesMd || [];
  // const ola = arrayOfFilesMd.length;
  // console.log({ola,linksOfFilesMd})
  arrayOfFilesMd.map((fileOfMD) => {
    const allInfoMd = /\[(.*)\]\((https*?:([^"')\s]+))/mg;
    const contentOfMd = fs.readFileSync(fileOfMD, 'utf8');
    
    // if(contentOfMd.length != 0){
      const linksOfMd = contentOfMd.match(allInfoMd);
      if (linksOfMd) {
        linksOfMd.map((links) => {
          const onlyLinks = /https*?:([^"')\s]+)/;
          const onlyTexts = /\[(.*)\]/;
          const onlyHrefsOfMd = links.match(onlyLinks)[0];
          const onlyTextOfMD = links.match(onlyTexts)[1].substring(0, 49);
          const arrayOfInfoFilesMd = {
            href: onlyHrefsOfMd,
            text: onlyTextOfMD,
            file: fileOfMD,
          };
          linksOfFilesMd.push(arrayOfInfoFilesMd);
        });
    };
    // }
      
  });
  return linksOfFilesMd;
};
// const arrLinks= getAllLinksOfMd(arrOffMD)[0].href;
// const arrLinkss= getAllLinksOfMd(arrOffMD);
// console.log({arrLinkss});



const getAllStatus = (arrLinks) => {
  // console.log({arrLinks});
    const statusOfLinks = arrLinks.map((element) => 
    
    fetch(element)
    .then((res)=>{
      element.status = res.status;
      element.ok = (res.status >= 200) && (res.status <= 399) ? 'ok' :'fail';
      return element;
    }) 
    .catch(() => {
      
        return {
          href: element.href,
          text: element.text,
          file: element.file,
          status: 'not found',
          ok: 'fail'
       
      }
      
    })
  )
  
  return Promise.all(statusOfLinks);
  }
  

// const answerOfStatus = getAllStatus(arrLinkss);


// answerOfStatus.then((allArrayOfStatus)=>{
  
//     console.log(allArrayOfStatus);
  
// })



module.exports = {existInputFilePath,validateDirectory, isValidateAbsolute, getAllFiles, getAllFilesMd, getAllLinksOfMd, getAllStatus};