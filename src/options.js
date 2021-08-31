const optionDefault = (allArrayOfStatus) => {
    return  allArrayOfStatus.map((element) =>
      `href: ${element.href} \ntext: ${element.text} \nfile: ${element.file}`
    ).join('\n\n')
};

const optionValidate = (allArrayOfStatus)=>{
    return allArrayOfStatus.map((element)=>
    `href: ${element.href} \ntext: ${element.text} \nfile: ${element.file} \nstatus: ${element.status} \nok: ${element.ok}`
     ).join('\n\n')    
}

module.exports = {optionDefault,optionValidate}