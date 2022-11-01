const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');

const USER_PATH = '../../data/users.json';

const readUser = async () => {
  const userData = await fs.readFile(path.resolve(
    __dirname,
    USER_PATH,
  ));
  const json = JSON.parse(userData);
  return json;
};

const writeUser = async (user) => {
  const data = await readUser();
  data.push(user);
  await fs.writeFile(
    path.resolve(path.resolve(__dirname, USER_PATH)),
    JSON.stringify(data),
  );
};

const generateToken = () => crypto.randomBytes(8).toString('hex');

module.exports = {
  readUser,
  writeUser,
  generateToken,
};