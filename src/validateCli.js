const {existInputFilePath, isValidateAbsolute, getAllFiles, getAllFilesMd, getAllLinksOfMd,getAllStatus} = require('./api.js')

const allLinksOfApi = (inputPath)=>
new Promise ((resolve,reject)=>{
    const validatePathAndExist = isValidateAbsolute(inputPath);
    
    if(!existInputFilePath(validatePathAndExist) )  reject(`No existe la dirección`);
    const validateGetAllFiles = getAllFiles(validatePathAndExist);
    if(validateGetAllFiles.length === 0) reject(`No hay Archivos en la carpeta`);
    const validateGetAllFilesMd = getAllFilesMd(validateGetAllFiles);
    if(validateGetAllFilesMd.length === 0)  reject(`No hay archivos .md`);
    const validategetAllLinksOfMd = getAllLinksOfMd(validateGetAllFilesMd);
    if(validategetAllLinksOfMd.length === 0) reject(`No hay links`);
    // if(option == false) resolve(validategetAllLinksOfMd)
    else resolve(getAllStatus(validategetAllLinksOfMd))
    // else getAllStatus(validategetAllLinksOfMd).then(linksStatus => resolve(linksStatus))
}) 

// const holi = allLinksOfApi('test',false)
// holi.then(linksStatus => console.log(linksStatus)).catch((e=>{console.log(e)}))
module.exports = {allLinksOfApi}


