const patientService = require('../services/patientsService');

const getAllPatientsAndPlans = async (_req, res) => {
  try {
    const result = await patientService.getAllPatientsAndPlans();
    return res.status(200).json({ message: result });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getAllPatientsAndSurgeries = async (_req, res) => {
  try {
    const result = await patientService.getAllPatientsAndSurgeries();
    return res.status(200).json({ message: result });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const insertPatient = async (req, res) => {
  try {
    const { fullname, planId } = req.body;
    const result = await patientService.insert({ fullname, planId });
    return res.status(201).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getAllPatientsAndSurgeriesNoDoc = async (_req, res) => {
  try {
    const result = await patientService.getAllPatientsAndSurgeriesNoDoc();
    return res.status(200).json({ message: result });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAllPatientsAndPlans,
  getAllPatientsAndSurgeries,
  insertPatient,
  getAllPatientsAndSurgeriesNoDoc,
};