const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

router.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;