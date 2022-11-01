const express = require('express');

// Middlewares
const validateActivitiesBody = require('../middlewares/validateActivitiesBody');
const validateActivitiesDescription = require('../middlewares/validateActivitiesDescription');
const validateAuthentication = require('../middlewares/validateAuthentication');

// fsUtils
const {
  readActivities,
  writeActivities,
 } = require('../utils/fsUtilsActivities');

const router = express.Router();

router.get('/', async (_req, res) => {
  const data = await readActivities();
  return res.status(200).json(data);
});

router.post(
'/',
validateActivitiesBody,
validateActivitiesDescription,
validateAuthentication,
async (req, res) => {
  const content = req.body;
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  content.description.createdAt = `${day}/${month}/${year}`;

  await writeActivities(content);

  return res.status(201).json({ message: 'Atividade cadastrada com sucesso.' });
},
);

module.exports = router;