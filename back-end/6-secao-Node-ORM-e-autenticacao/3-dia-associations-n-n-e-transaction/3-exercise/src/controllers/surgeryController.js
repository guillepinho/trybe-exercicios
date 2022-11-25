const SurgeryService = require('../services/surgeryService');

const getAllSurgeries = async (req, res) => {
  try {
    const { name } = req.params;
    const result = await SurgeryService.getAllSurgeries(name);
    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAllSurgeries,
};