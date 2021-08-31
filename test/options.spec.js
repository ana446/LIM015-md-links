// D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example4.md
const {optionDefault,optionValidate} = require('../src/options.js');

describe('optionDefault',() => {
    const allInformation = [ {
        href: 'https://github.con/workshopper/learnyounode',
        text: 'learnyounode learnyounode learnyounode learnyouno',
        file: 'D:\Laboratoria\LIM015-md-links\test\anotherExample\example4.md',
        status: 'not found',
        ok: 'fail'
    }]
    it('should be function', ()=> {
        expect(typeof optionDefault).toBe('function');
    })
    it('should return href, text and file', ()=> {
        const rpt1 =`href: https://github.con/workshopper/learnyounode \ntext: learnyounode learnyounode learnyounode learnyouno \nfile: D:\Laboratoria\LIM015-md-links\test\anotherExample\example4.md`
        expect(optionDefault(allInformation)).toEqual(rpt1)
    })
    it('should return href, text, file,status and ok', ()=> {
        const rpt =`href: https://github.con/workshopper/learnyounode \ntext: learnyounode learnyounode learnyounode learnyouno \nfile: D:\Laboratoria\LIM015-md-links\test\anotherExample\example4.md \nstatus: not found \nok: fail`
        expect(optionValidate(allInformation)).toEqual(rpt)
    })
})