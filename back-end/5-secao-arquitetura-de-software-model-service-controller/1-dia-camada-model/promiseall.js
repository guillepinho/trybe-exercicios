const fs = require('fs/promises');
const path = require('path');

const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

const funct = async (array) => {
  try {
    const promises = array.map(async (each, i) => {
      await fs.writeFile(path.resolve(__dirname, `file${i + 1}.txt`), each);
    });
    await Promise.all(promises)
  } catch (e) {
    console.log(e);
  } finally {
    const read = array.map(async (_each, i) => await fs.readFile(path.resolve(__dirname, `file${i + 1}.txt`), 'utf-8'));
    const fullContent = (await Promise.all(read)).join(' ');
    await fs.writeFile(path.resolve(__dirname, 'fileAll.txt'), fullContent);
  }
};

funct(array);