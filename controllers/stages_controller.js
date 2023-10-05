const express = require('express');
const router = express.Router();
const db = require('../models');

const { Stage } = db;

// route
router.get('/', async (req, res) => {
  try {
    const stages = await Stage.findAll();
    res.json(stages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// route retrieving event by id
router.get('/:id', async (req, res) => {
  const stageId = req.params.id;
  try {
    const stage = await Stage.findByPk(stageId);
    if (!stage) {
      res.status(404).json({ error: 'Stage not found' });
    } else {
      res.json(stage);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// new
router.post('/', async (req, res) => {
  const { name, capacity } = req.body;
  try {
    const newStage = await Stage.create({ name, capacity });
    res.status(201).json(newStage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// update event by id
router.put('/:id', async (req, res) => {
  const stageId = req.params.id;
  const { name, capacity } = req.body;
  try {
    const stage = await Stage.findByPk(stageId);
    if (!stage) {
      res.status(404).json({ error: 'Stage not found' });
    } else {
      stage.name = name;
      stage.capacity = capacity;
      await stage.save();
      res.json(stage);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// delete an event by id
router.delete('/:id', async (req, res) => {
  const stageId = req.params.id;
  try {
    const stage = await Stage.findByPk(stageId);
    if (!stage) {
      res.status(404).json({ error: 'Stage not found' });
    } else {
      await stage.destroy();
      res.status(204).send(); // No content
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
