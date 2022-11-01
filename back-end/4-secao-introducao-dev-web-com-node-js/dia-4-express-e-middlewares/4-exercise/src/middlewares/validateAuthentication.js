const fs = require('fs/promises');
const path = require('path');

const USER_PATH = '../../data/users.json';

const validateAuthentication = async (req, res, next) => {
  // Gets header authorization provided
  const token = req.header('X-Authorization');

  const authData = await fs.readFile(path.resolve(
    __dirname,
    USER_PATH,
  ));
  const jsonAuthData = JSON.parse(authData);

  // Verifies if token provided exists in database
  const check = jsonAuthData.some(({ token: tk }) => tk === token);
  // Validation
  if (!check || token.length !== 16) return next({ code: 401, message: 'Token inválido' });
  // Ok? Let's go
  next();
};

module.exports = validateAuthentication;