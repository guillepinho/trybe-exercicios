const { Plan, Patient } = require('../models');

const getPlanAndPatients = async (id) => Plan.findOne({
    where: { planId: id },
    include: [{ model: Patient, as: 'patient' }],
  });

module.exports = {
  getPlanAndPatients,
};