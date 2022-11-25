const { Surgery, Patient } = require('../models');

const getAllSurgeries = async (name) => Surgery.findAll({
  where: { doctor: name },
  include: [
    {
      model: Patient,
      as: 'patient',
      through: { attributes: [] },
    }],
});

module.exports = {
  getAllSurgeries,
};