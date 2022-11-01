/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
const validateActivitiesDescription = (req, _res, next) => {
  const cont = req.body;
  const u = undefined;
  // Properties to Validate
  if (!cont.description) return next({ code: 400, message: 'O campo description é obrigatório' });
  const { description: desc } = cont;
  if (desc.rating === u) return next({ code: 400, message: 'O campo rating é obrigatório' });
  if (!(desc.rating >= 1 && desc.rating <= 5)) {
    return next({ code: 400, message: 'O campo rating deve ser um número entre 1 e 5' });
  } 
  const difficulties = ['Fácil', 'Médio', 'Difícil'];
  if (!desc.difficulty) return next({ code: 400, message: 'O campo difficulty é obrigatório' });
  if (!difficulties.includes(desc.difficulty)) {
    return next({ code: 400, message: 'O campo difficulty deve ser Fácil, Médio ou Difícil' });
  }

  // Is it good? Let's go!
  next();
};

module.exports = validateActivitiesDescription;