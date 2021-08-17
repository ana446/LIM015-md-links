const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');



//convierte una ruta relativa a absoluta
const isValidateAbsolute = (inputFilePath) => {
  const normalizedPath = path.normalize(inputFilePath);
  return path.isAbsolute(normalizedPath) ? normalizedPath : path.resolve(normalizedPath);
};
const prueba = isValidateAbsolute('src');
// console.log(prueba);


//función de recursividad para recorrer todos los directorios
// const existInputFilePath = (inputFilePath) => fs.existsSync(inputFilePath);

const getAllFiles = (inputFilePath, arrayOfFiles) => {
  files = fs.readdirSync(inputFilePath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach((file) => {
    if (fs.statSync(inputFilePath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(inputFilePath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(inputFilePath, file));
    }
  })
  return arrayOfFiles;
};
const result = getAllFiles(prueba);
// console.log(typeof result);
// console.log(result);

//obtener todos los archivos .md
const getAllFilesMd = (inputFilePath, arrayOfFilesMd) => {
  arrayOfFilesMd = arrayOfFilesMd || [];
  inputFilePath.map((file) => {
    const filesMd = path.extname(file);
    if (filesMd === '.md') {
      arrayOfFilesMd.push(path.join(file));
    };

  })
  return arrayOfFilesMd;
}
const arrOffMD = getAllFilesMd(result);
// console.log(getAllFilesMd(result));
// const esDirectorio = fs.readdirSync('D:\\Laboratoria\\LIM015-md-links\\src');
// console.log(esDirectorio);
//match(/https*?:([^"')\s]+)/)[0] (Match para url)
// match(/\[(.*)\]/)[1].substr(0, 49)    (Match para texto)
// /\[(.*)\]/)[1]/https*?:([^"')\s]+)/   Valores por defecto

//Leer un archivo e imprimir en consola 
const getAllLinksOfMd = (arrayOfFilesMd, linksOfFilesMd) => {
  linksOfFilesMd = linksOfFilesMd || [];

  arrayOfFilesMd.map((fileOfMD) => {
    const allInfoMd = /\[(.*)\]\((https*?:([^"')\s]+))/mg;
    const contentOfMd = fs.readFileSync(fileOfMD, 'utf8');
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
    
  });
  return linksOfFilesMd;
};
// const arrLinks= getAllLinksOfMd(arrOffMD)[0].href;
const arrLinkss= getAllLinksOfMd(arrOffMD);
// console.log(arrLinkss);

const getAllStatus = (arrLinks) => {
  const statusOfLinks = arrLinks.map((element) => 
     fetch(element)
    .then((res)=>{
      element.status = res.status;
      element.ok = res.status === 200 ? 'ok' :'failed';
      return element;
    }) 
    .catch((err) => {
      console.log(err.message);
    })
  )
  
  return statusOfLinks;
}
const answerOfStatus = getAllStatus(arrLinkss);

Promise.all(answerOfStatus).then((allArrayOfStatus)=>{
  console.log(allArrayOfStatus)
} );

//status


module.exports = { isValidateAbsolute, getAllFiles, getAllFilesMd,getAllStatus };