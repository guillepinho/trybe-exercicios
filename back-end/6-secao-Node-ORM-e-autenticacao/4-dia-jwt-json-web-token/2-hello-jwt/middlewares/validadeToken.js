const jwt = require('jsonwebtoken');
require('dotenv/config');

const { JWT_SECRET } = process.env;

module.exports = (req, _res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    const error = new Error('Token not found');
    error.statusCode = 401;
    return next(error);
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (e) {
    e.statusCode(401);
    return next(e);
  }
};