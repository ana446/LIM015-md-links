const {existInputFilePath, isValidateAbsolute, getAllFiles, getAllFilesMd, getAllLinksOfMd,getAllStatus} = require('./api.js')

const allLinksOFApi = (inputPath)=>
new Promise ((resolve,reject)=>{
    const validatePathAndExist = isValidateAbsolute(inputPath);
    // if(inputPath === undefined) reject(`ingrese la direccion`)
    if(!existInputFilePath(validatePathAndExist)  )  reject(`No existe la dirección`);
    const validateGetAllFiles = getAllFiles(validatePathAndExist);
    if(validateGetAllFiles.length === 0) reject(`No hay Archivos en la carpeta`);
    const validateGetAllFilesMd = getAllFilesMd(validateGetAllFiles);
    if(validateGetAllFilesMd.length === 0)  reject(`No hay archivos .md`);
    const validategetAllLinksOfMd = getAllLinksOfMd(validateGetAllFilesMd);
    if(validategetAllLinksOfMd.length === 0) reject(`No hay links`);
    
    else return resolve(getAllStatus(validategetAllLinksOfMd) )
}) 

module.exports = {allLinksOFApi}

// const holi = allLinksOFApi('test')
// // console.log(holi)
// holi.then((allArrayOfStatus) =>console.log(allArrayOfStatus)).catch((e)=>console.log(e))
// // console.log(ttt)

