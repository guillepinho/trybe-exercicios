const { Patient, Plan, Surgery, sequelize } = require('../models');

const getAllPatientsAndPlans = async () => Patient.findAll(
  {
    include: [{
      model: Plan,
      as: 'plan',
    }],
  },
);

const getAllPatientsAndSurgeries = async () => Patient.findAll({
  include: [{
    model: Surgery,
    as: 'surgeries',
    through: { attributes: [] },
  }],
});

const insert = async ({ fullname, planId }) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const patient = await Patient.create({
        fullname, planId,
      }, { transaction: t });
      return patient;
    });
    return result;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const getAllPatientsAndSurgeriesNoDoc = async () => Patient.findAll({
  include: [{
    model: Surgery,
    as: 'surgeries',
    attributes: { exclude: ['doctor'] },
    through: { attributes: [] },
  }],
});

module.exports = {
  getAllPatientsAndPlans,
  getAllPatientsAndSurgeries,
  insert,
  getAllPatientsAndSurgeriesNoDoc,
};