const mongoose = require('mongoose');

const energyDataSchema = new mongoose.Schema({
  device: String,
  usage: Number,
  timestamp: Date,
});

const EnergyData = mongoose.model('EnergyData', energyDataSchema);
module.exports = EnergyData;
