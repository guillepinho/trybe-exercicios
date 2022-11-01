const express = require('express');

// Middlewares
const validateUser = require('../middlewares/validateUser');
// fsUtils
const {
  readUser,
  writeUser,
  generateToken,
 } = require('../utils/fsUtilsUser');

const router = express.Router();

router.get('/', async (_req, res) => {
  const data = await readUser();
  return res.status(200).json(data);
});

router.post('/', validateUser, async (req, res) => {
  const content = req.body;
  content.token = generateToken();
  await writeUser(content);
  return res.status(201).json({ message: content.token });
});

module.exports = router;