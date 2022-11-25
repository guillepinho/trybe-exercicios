const planService = require('../services/planService');

const getPlanAndPatients = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await planService.getPlanAndPatients(id);
    if (!result) return res.status(404).json({ message: 'Not found' });
    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getPlanAndPatients,
};