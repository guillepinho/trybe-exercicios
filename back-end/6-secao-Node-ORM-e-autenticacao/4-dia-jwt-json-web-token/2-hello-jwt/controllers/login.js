require('dotenv/config');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const fs = require('fs/promises');
const path = require('path');

const { JWT_SECRET } = process.env;
const DATA = '../data/users.json';

const validation = Joi.object({
  username: Joi.string().alphanum().min(5).required(),
  password: Joi.string().min(5).required(),
});

const readUsers = async () => {
  const userData = await fs.readFile(path.resolve(__dirname, DATA));
  const userDataJson = JSON.parse(userData);
  return userDataJson;
};

const verifyExists = (array, newUser) => {
  const exists = array.findIndex(({ username }) => username === newUser.username);
  return exists;
};

module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  const { error } = validation.validate({ username, password });
  if (error) return next(error);

  const users = await readUsers();
  const user = verifyExists(users, { username, password });

  if (user === -1) {
    return res.status(404).json({ error: 'There\'s no such user, please signup first.' });
  }

  if (users[user].password !== password) {
    return res.status(401).json({ error: 'Wrong password.' });
  }

  const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };
  const token = jwt.sign(users[user], JWT_SECRET, jwtConfig);

  return res.status(200).json({ token });
};