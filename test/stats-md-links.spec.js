const {totalAndUniqueOfLinksStats, brokenOfLinksStats} = require('../src/stats.js')
//test of options.js
describe('totalAndUniqueOfLinksStats',() =>{
    it ('should be function', () => {
      expect(typeof totalAndUniqueOfLinksStats).toBe('function');
    });
    it('shoul be total: 2 and unique: 2', () => {
      const arrayOfLinks = [
        {
          href: 'https://github.con/workshopper/learnyounode',
          text: 'learnyounode learnyounode learnyounode learnyouno',
          file: 'D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example2.md',
          status: 'not found',
          ok: 'fail'
        },
        {
          href: 'https://github.com/workshopper/how-to-npm',
          text: 'how-to-npm',
          file: 'D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example2.md',
          status: 200,
          ok: 'ok'
        }
      ];
      const rpt = `total: 2 \nunique: 2 `
      expect(totalAndUniqueOfLinksStats(arrayOfLinks)).toEqual(rpt);
    });
  });
  
  describe('brokenOfLinksStats', () => {
    it('should be function', ()=>{
      expect(typeof brokenOfLinksStats).toBe('function');
    });
    it ('should be broken 1', ()=>{
      const arrayOfLinkss = [
        {
          href: 'https://github.con/workshopper/learnyounode',
          text: 'learnyounode learnyounode learnyounode learnyouno',
          file: 'D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example2.md',
          status: 'not found',
          ok: 'fail'
        },
        {
          href: 'https://github.com/workshopper/how-to-npm',
          text: 'how-to-npm',
          file: 'D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example2.md',
          status: 200,
          ok: 'ok'
        }
      ];
      const rptBroken = `broken: 1`
      expect(brokenOfLinksStats(arrayOfLinkss)).toEqual(rptBroken);
    });
  });
  