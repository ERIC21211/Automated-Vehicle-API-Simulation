const express = require('express');
const router = express.Router();
const Joi = require('joi');

// Simulated static data
const staticData = {
  vehicleId: "abc123",
  timestamp: new Date().toISOString(),
  speed: 45.2,
  batteryLevel: 76,
  brakeEngaged: false,
  location: {
    lat: 37.7749,
    lng: -122.4194
  }
};

// GET static data
router.get('/static', (req, res) => {
  res.status(200).json(staticData);
});

// GET dynamic data (e.g., simulate speed changes)
router.get('/dynamic', (req, res) => {
  const dynamicData = {
    ...staticData,
    timestamp: new Date().toISOString(),
    speed: (Math.random() * 100).toFixed(2),
    batteryLevel: Math.floor(Math.random() * 100),
    brakeEngaged: Math.random() < 0.5
  };
  res.status(200).json(dynamicData);
});

// Validate test query
router.post('/test', (req, res) => {
  const schema = Joi.object({
    vehicleId: Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  res.status(200).json({ message: 'Vehicle ID accepted.', received: req.body });
});

module.exports = router;
