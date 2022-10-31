const fs = require('fs').promises;
const { join } = require('path');

const path = '/files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path));
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe
    .filter((chocolate) => chocolate.brandId === brandId);
};

const getChocolateCount = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.length;
};

const searchChocolateByName = async (name) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe
    .filter((chocolate) => chocolate.name.toLowerCase().includes(name.toLowerCase()));
}

const updatedChocolateById = async (id, content) => {
  const chocolates = await readCacauTrybeFile();
  const updatedData = { id, ...content };

  const updatedChocolates = chocolates.reduce((chocolateList, curChocolate) => {
    if (curChocolate.id === updatedData.id) return [...chocolateList, updatedData];
    return [...chocolateList, curChocolate];
  }, []);

  await fs.writeFile(
    join(__dirname, path),
    JSON.stringify(updatedChocolates),
  );

  return updatedData;
}

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    getChocolateCount,
    searchChocolateByName,
    updatedChocolateById,
};