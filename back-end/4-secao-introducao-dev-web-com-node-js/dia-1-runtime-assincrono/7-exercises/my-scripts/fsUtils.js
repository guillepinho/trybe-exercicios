const fs = require('fs').promises;
const path = require('path');

const fetchFile = async () => {
  const file = await fs.readFile(
    path.resolve(__dirname, './simpsons.json')
  );
  const data = JSON.parse(file);
  return data;
};

const every = async () => {
  const data = await fetchFile();
  data.forEach(({ id, name }) => {
    console.log(`${id} - ${name}`);
  });
};

const fetchSpecific = async (char) => {
  const data = await fetchFile();
  let specific = data.find(({name}) => name.toLowerCase().includes(char.toLowerCase()));
  if (specific) console.log(specific);
  else console.log('This character doesn\' exist');
};

const deleteData = async () => {
  const data = await fetchFile();
  data.splice(9, 1);
  data.splice(5, 1);
  fs.writeFile(
    (path.resolve(__dirname, './simpsons.json')),
    JSON.stringify(data)
  );
};

const newFile = async () => {
  const data = await fetchFile();
  const newFile = data.splice(0, 4);
  fs.writeFile(
    (path.resolve(__dirname, './simpsonsFamily.json')),
    JSON.stringify(newFile)
  );
}

const addNelson = async () => {
  const file = await fs.readFile(
    path.resolve(__dirname, './simpsonsFamily.json')
  );
  const data = JSON.parse(file);
  const newData = [...data, {"id":"8","name":"Nelson Muntz"}];
  fs.writeFile(
    (path.resolve(__dirname, './simpsonsFamily.json')),
    JSON.stringify(newData)
  );
};

const fixFamily = async () => {
  const file = await fs.readFile(
    path.resolve(__dirname, './simpsonsFamily.json')
  );
  const data = JSON.parse(file);
  data[data.length - 1].name = "Maggie Simpson";
  fs.writeFile(
    (path.resolve(__dirname, './simpsonsFamily.json')),
    JSON.stringify(data)
  );
};

module.exports = {
  every,
  fetchSpecific,
  deleteData,
  newFile,
  addNelson,
  fixFamily
};