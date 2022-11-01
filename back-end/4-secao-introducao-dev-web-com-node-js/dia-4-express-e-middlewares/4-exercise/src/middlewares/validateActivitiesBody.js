const validateActivitiesBody = (req, _res, next) => {
  const content = req.body;
  // Properties to Validate
  if (!content.name) return next({ code: 400, message: 'O campo name é obrigatório' });
  if (content.price === undefined) {
    return next({ code: 400, message: 'O campo price é obrigatório' });
  } 

  // Is it good? Let's go!
  next();
};

module.exports = validateActivitiesBody;