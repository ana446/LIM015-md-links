
const totalAndUniqueOfLinksStats = (arrayOfLinks) => {
    // console.log(allInformation)
  const totalLinks = arrayOfLinks.length;
  const unique = arrayOfLinks.map((element)=>element.href);
  const totalUnique = new Set(unique);
  const allTotalUnique = totalUnique.size;
  const totalAndUnique= `total: ${totalLinks} \nunique: ${allTotalUnique} `;
  return totalAndUnique
  };
  
  const brokenOfLinksStats = (arrayOfLinks)=> {
    const broken = arrayOfLinks.filter((element)=> 
    element.status<200 || element.status >= 400 | element.status === 'not found')
    const totalBroken = broken.length
    const statsBroken = `broken: ${totalBroken}`;
    return  statsBroken
  }
 

module.exports = {totalAndUniqueOfLinksStats, brokenOfLinksStats };