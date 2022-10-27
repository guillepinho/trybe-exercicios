const readline = require('readline-sync');
const { every, fetchSpecific, deleteData, newFile, addNelson, fixFamily } = require('./fsUtils');

const main = () => {
  const whichFunction = readline.question('Which function you want to run, m\'lord?');
  try {
    if (whichFunction == 1) every();
    else if (whichFunction == 2) {
      const which = readline.question('Which character to search, m\'lord?');
      fetchSpecific(which);
    }
    else if (whichFunction == 3) deleteData();
    else if (whichFunction == 4) newFile();
    else if (whichFunction == 5) addNelson();
    else if (whichFunction == 6) fixFamily();
    else throw Error(); 
  } catch (e) {
    console.log('I\'m sorry, m\'lord, but it seems that this specific file does not exist.');
  }
}

main();