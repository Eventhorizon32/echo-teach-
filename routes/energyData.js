const express = require('express');
const EnergyData = require('../models/EnergyData');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await EnergyData.find().sort({ timestamp: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const data = new EnergyData({
    device: req.body.device,
    usage: req.body.usage,
    timestamp: new Date(),
  });

  try {
    const newData = await data.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
