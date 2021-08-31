const userHelper = ()=> {
    return `
    ***************************************** MD-LINKS HELP ***************************************************
      Debe ingresar la direccion del archivo, por ejemplo:
        md-links D:\\Laboratoria\\LIM015-md-links\\src\\anotherExample\\example2.md o 
        md-links src
      Opciones validas: 
        --stats
        --validate 
        --stats --validate  o --validate --stats 
      Ejemplos: 
        md-links src --stats 
        md-links D:\\Laboratoria\\LIM015-md-links\\src\\anotherExample\\example2.md --validate --stats`
    }

module.exports = {userHelper };