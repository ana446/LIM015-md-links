const optionDefault = (allArrayOfStatus) => {
    allArrayOfStatus.forEach((element)=>{
        const cliValidateFalse=`href: ${element.href} \ntext: ${element.text} \nfile: ${element.file} \n`;
        console.log(cliValidateFalse);
    })
};

const optionValidate = (allArrayOfStatus)=>{
    allArrayOfStatus.forEach((element)=>{
        const cliValidateTrue=`href: ${element.href} \ntext: ${element.text} \nfile: ${element.file} \nstatus: ${element.status} \nok: ${element.ok} \n`;
        console.log(cliValidateTrue);
      })
}

module.exports = {optionDefault,optionValidate}