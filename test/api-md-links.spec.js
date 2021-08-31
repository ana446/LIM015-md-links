const {existInputFilePath,validateDirectory, isValidateAbsolute, getAllFiles, getAllFilesMd, getAllLinksOfMd, getAllStatus} = require('../src/api.js');
const fetch = require('../__mocks__/node-fetch')
describe('existInputFilePath',()=>{
  it('should be function', ()=>{
    expect(typeof existInputFilePath).toBe('function');
  });
  it('should be exist the path',()=>{
    expect(existInputFilePath('src')).toBe(true);
  });
  it('should not be exist the path',()=>{
    expect(existInputFilePath('D:\\Laboratoria\\LIM015-md-linkss')).toBe(false);
  });
});

describe('validateDirectory', () => {
  it ('shuld be function', () => {
    expect(typeof validateDirectory).toBe('function');
  })
  it('should be exit directory', ()=>{
    expect(validateDirectory('D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\anotherExample2')).toBe(true);
  });
  it('should not be exit directory', ()=>{
    expect(validateDirectory('D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\anotherExample2\\example3.md')).toBe(false);
  });
});

describe('isAbsolutePath', () => {
  it('should be function', () => {
    expect(typeof isValidateAbsolute).toBe('function');
  });
  it('should be absolute path', () => {
    expect(isValidateAbsolute('test')).toEqual('D:\\Laboratoria\\LIM015-md-links\\test');
  });
  it('should be absolute path', () => {
    expect(isValidateAbsolute('D:\\Laboratoria\\LIM015-md-links\\src')).toEqual('D:\\Laboratoria\\LIM015-md-links\\src');
  });
});

describe('getAllFiles', () =>{
  it('should be function', () =>{
    expect(typeof getAllFiles).toBe('function');
  });
  it('should be files',()=>{
    const arrayAllFiles = ['test\\anotherExample\\anotherExample2\\example3.md','test\\anotherExample\\example1.js'
    ,'test\\anotherExample\\example11.md','test\\anotherExample\\example2.md','test\\anotherExample\\example4.md','test\\api-md-links.spec.js','test\\options.spec.js','test\\stats-md-links.spec.js','test\\validateCli.spec.js'];
    expect(getAllFiles('test')).toEqual(arrayAllFiles);
  });
  it('should be a only one file',()=>{
  const onlyPath = ['test\\anotherExample\\anotherExample2\\example3.md'];
  expect(getAllFiles('test\\anotherExample\\anotherExample2\\example3.md')).toEqual(onlyPath)
  })
  it('should be object',()=>{
     expect(typeof getAllFiles('test')).toBe('object');
  });
});

describe('getAllFilesMd',() => {
  it('should be function', () => {
    expect(typeof getAllFilesMd).toBe('function');
  });
  it('should be .md files', ()=>{
    const arrayAllFiles = ['test\\anotherExample\\anotherExample2\\example3.md','test\\anotherExample\\example1.js','test\\anotherExample\\example2.md',];
    const arrayAllFilesMd = ['test\\anotherExample\\anotherExample2\\example3.md','test\\anotherExample\\example2.md'];
    expect(getAllFilesMd(arrayAllFiles)).toEqual(arrayAllFilesMd);
  });
  it('should be object', ()=>{
    const arrayAllFiles = ['test\\anotherExample\\anotherExample2\\example3.md','test\\anotherExample\\example1.js','test\\anotherExample\\example2.md'];
    expect(typeof getAllFilesMd(arrayAllFiles)).toBe('object');
  });
});

describe('getAllLinksOfMd',() => {
  it('should be function', () => {
    expect(typeof getAllLinksOfMd).toBe('function');
  })
  it('should be return all the links in the .md file',() =>{
    const allLinks= [
      {
        href: 'https://github.con/workshopper/learnyounode',
        text: 'learnyounode learnyounode learnyounode learnyouno',
        file: 'D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example2.md'
      },
      {
        href: 'https://github.com/workshopper/how-to-npm',
        text: 'how-to-npm',
        file: 'D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example2.md'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/JavaScript/Reference/Global_Objects/Array/Reduce',
        text: 'Array.prototype.reduce() - MDN',
        file: 'D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example2.md'
      }
    ];
    
    expect(getAllLinksOfMd(['D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example2.md'])).toEqual(allLinks);
  });
});

describe('get status', () => {
  it('should be a function', () => {
    expect(typeof getAllStatus).toBe('function');
  });
  it('should return status 200',()=> {
    const mdLinks = [
      {
        href: 'https://github.com/workshopper/how-to-npm',
        text: 'how-to-npm',
        file: 'D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example2.md'
      }
    ];
    const statusLinks = [
      
      {
        href: 'https://github.com/workshopper/how-to-npm',
        text: 'how-to-npm',
        file: 'D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example2.md',
        status: 200,
        ok: 'ok'
      },
      
    ];
    const validateLinkTest = {
      status: 200
   
    };
    fetch.mockResolvedValue(validateLinkTest);
    return getAllStatus(mdLinks).then((elements)=>{
      expect(elements).toEqual(statusLinks);
    })
  });
  it('should return status 404',()=> {
    const mdLinks = [
      {
      href: 'https://developer.mozilla.org/es/docs/JavaScript/Reference/Global_Objects/Array/Reduce',
      text: 'Array.prototype.reduce() - MDN',
      file: 'D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example2.md'
      }
    ];
    const statusLinks = [
      
      {
        href: 'https://developer.mozilla.org/es/docs/JavaScript/Reference/Global_Objects/Array/Reduce',
        text: 'Array.prototype.reduce() - MDN',
        file: 'D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example2.md',
        status: 404,
        ok: 'fail'
      },
      
    ];
    const validateLinkTest = {
      status: 404
   
    };
    fetch.mockResolvedValue(validateLinkTest);
    return getAllStatus(mdLinks).then((elements)=>{
      expect(elements).toEqual(statusLinks);
    })
  });
  it('should return status not found',()=> {
    const mdLinks = [
      {
        href: 'https://github.con/workshopper/learnyounode',
        text: 'learnyounode learnyounode learnyounode learnyouno',
        file: 'D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example2.md'
      }
    ];
    const statusLinks = [
      
      {
        href: 'https://github.con/workshopper/learnyounode',
        text: 'learnyounode learnyounode learnyounode learnyouno',
        file: 'D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example2.md',
        status: 'not found',
        ok: 'fail'
      },
      
    ];
    const validateLinkTest = {
      status: 'not found',
      ok: 'fail'
   
    };
    fetch.mockRejectedValue(validateLinkTest);
    try{
      return getAllStatus(mdLinks)
    }catch(e){
      expect(e).toEqual(statusLinks)
    }
   
      
    }
    )
  ;
  
})
