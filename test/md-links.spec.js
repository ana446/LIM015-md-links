const {isValidateAbsolute,  getAllFiles , getAllFilesMd} = require('../src/index.js');

describe('isAbsolutePath', () => {
  it('should be function', () => {
    expect(typeof isValidateAbsolute).toBe('function');
  });
  it('should be absolute path', () => {
    expect(isValidateAbsolute('src')).toEqual('D:\\Laboratoria\\LIM015-md-links\\src');
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
    const arrayAllFiles = ['src\\anotherExample\\anotherExample2\\example3.md','src\\anotherExample\\example1.js','src\\anotherExample\\example2.md','src\\index.js'];
    expect(getAllFiles('src')).toEqual(arrayAllFiles);
  });
  it('should be object',()=>{
     expect(typeof getAllFiles('src')).toBe('object');
  });
});

describe('getAllFilesMd',() => {
  it('should be function', () => {
    expect(typeof getAllFilesMd).toBe('function');
  });
  it('should be .md files', ()=>{
    const arrayAllFiles = ['src\\anotherExample\\anotherExample2\\example3.md','src\\anotherExample\\example1.js','src\\anotherExample\\example2.md','src\\index.js'];
    const arrayAllFilesMd = ['src\\anotherExample\\anotherExample2\\example3.md','src\\anotherExample\\example2.md'];
    expect(getAllFilesMd(arrayAllFiles)).toEqual(arrayAllFilesMd);
  });
  it('should be object', ()=>{
    const arrayAllFiles = ['src\\anotherExample\\anotherExample2\\example3.md','src\\anotherExample\\example1.js','src\\anotherExample\\example2.md','src\\index.js'];
    expect(typeof getAllFilesMd(arrayAllFiles)).toBe('object');
  });
});
