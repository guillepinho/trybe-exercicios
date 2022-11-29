require('dotenv/config');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const fs = require('fs/promises');
const path = require('path');

const { JWT_SECRET } = process.env;

const validation = Joi.object({
  username: Joi.string().alphanum().min(5).required(),
  password: Joi.string().min(5).required(),
});

const DATA = '../data/users.json';

const readUsers = async () => {
  const userData = await fs.readFile(path.resolve(__dirname, DATA));
  const userDataJson = JSON.parse(userData);
  return userDataJson;
};

const verifyExists = (array, newUser) => {
  const exists = array.findIndex(({ username }) => username === newUser.username);
  if (exists !== -1) return true;
  return false;
};

const writeUsers = async (newUser) => {
  const userData = await readUsers();
  if (verifyExists(userData, newUser) === true) {
    const error = new Error('User already exists');
    error.statusCode = 409;
    return { error2: true,
      errorData: error,
    };
  }
  const isAdmin = Math.round(Math.random());
  userData.push({ ...newUser, admin: isAdmin === 1 });
  await fs.writeFile(path.resolve(__dirname, DATA), JSON.stringify(userData));

  const { username, password } = newUser;
  return {
    username,
    password,
    error2: false,
  };
};

module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  const { error } = validation.validate({ username, password });
  if (error) return next(error);
  
  const { error2, errorData } = await writeUsers({ username, password });
  if (error2) return next(errorData);

  const payload = {
    username,
    password,
  };

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

  return res.status(201).json({ token });
};