const validateUser = (req, _res, next) => {
  const content = req.body;
  // Properties to Validate
  const properties = ['email', 'password', 'firstName', 'phone'];
  // Validation
  const check = properties.every((prop) => prop in content);
  if (!check) return next({ code: 400, message: 'Campos ausentes!' });

  // Is it good? Let's go!
  next();
};

module.exports = validateUser;