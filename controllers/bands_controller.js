const express = require('express');
const router = express.Router();
const db = require('../models');

const { Band } = db;

//  Route 
router.get('/', async (req, res) => {
  try {
    const foundBands = await Band.findAll();
    res.status(200).json(foundBands);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Show Route 
router.get('/:id', async (req, res) => {
  try {
    const foundBand = await Band.findOne({
      where: { band_id: req.params.id }
    });
    if (!foundBand) {
      res.status(404).json({ message: 'Band not found' });
    } else {
      res.status(200).json(foundBand);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create Route 
router.post('/', async (req, res) => {
  try {
    const newBand = await Band.create(req.body);
    res.status(200).json({
      message: 'Band created successfully',
      data: newBand
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Route 
router.put('/:id', async (req, res) => {
  try {
    const updatedBands = await Band.update(req.body, {
      where: { band_id: req.params.id }
    });
    if (updatedBands[0] === 0) {
      res.status(404).json({ message: 'Band not found' });
    } else {
      res.status(200).json({ message: 'Band updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Route 
router.delete('/:id', async (req, res) => {
  try {
    const deletedBands = await Band.destroy({
      where: { band_id: req.params.id }
    });
    if (deletedBands === 0) {
      res.status(404).json({ message: 'Band not found' });
    } else {
      res.status(200).json({ message: 'Band deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
