const {allLinksOfApi} = require('../src/validateCli.js');
const fetch = require('../__mocks__/node-fetch');
describe('allLinksOfApi',() => {
    it('should be function', () => {
        expect( typeof allLinksOfApi).toBe('function')
    });
    it('should return an error if path is invalid', () => {
        return expect(allLinksOfApi('invalid-path')).rejects.toMatch(`No existe la dirección`)
    });
    it('should return an error if the directory is empty', () =>{
        return expect(allLinksOfApi('hola')).rejects.toMatch(`No hay Archivos en la carpeta`)
    });
    it('should return an error if no md-files exist', () =>{
        return expect(allLinksOfApi('src')).rejects.toMatch(`No hay archivos .md`)
    });
    it('should return an error if no md-links exist', () =>{
        return expect(allLinksOfApi('D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example11.md')).rejects.toMatch(`No hay links`)
    });
    it('should return [href,text,file,status,ok]',()=>{
        const allInformation =[
            {
              href: 'https://github.con/workshopper/learnyounode',
              text: 'learnyounode learnyounode learnyounode learnyouno',
              file: 'D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example4.md',
              status: undefined,
              ok: 'fail'
            }
          ];
        fetch.mockResolvedValue([{status: undefined, ok: 'fail' }]);
        // return allLinksOfApi('D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example4.md').then((e)=>{
        //     expect(e).toEqual(allInformation)
        return expect(allLinksOfApi('D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example4.md')).resolves.toEqual(allInformation);
   
  
        // return expect(allLinksOfApi('D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example4.md')).resolves.toEqual(allInformation);
        
    })
})