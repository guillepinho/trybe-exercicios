module.exports = (req, _res, next) => {
  if (!req.user.admin) {
    const err = new Error('Restricted Acess');
    err.statusCode = 401;
    return next(err);
  }
  return next();
};