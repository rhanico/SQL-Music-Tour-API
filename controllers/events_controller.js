const express = require('express');
const router = express.Router();
const db = require('../models');

const { Event } = db;

// route
router.get('/', async (req, res) => {
  try {
    const events = await Event.findAll({
      order: [['date', 'ASC']],
    });
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// route retrieving event by id
router.get('/:id', async (req, res) => {
  const eventId = req.params.id;
  try {
    const event = await Event.findByPk(eventId);
    if (!event) {
      res.status(404).json({ error: 'Event not found' });
    } else {
      res.json(event);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// new
router.post('/', async (req, res) => {
  const { name, date, location } = req.body;
  try {
    const newEvent = await Event.create({ name, date, location });
    res.status(201).json(newEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// update event by id
router.put('/:id', async (req, res) => {
  const eventId = req.params.id;
  const { name, date, location } = req.body;
  try {
    const event = await Event.findByPk(eventId);
    if (!event) {
      res.status(404).json({ error: 'Event not found' });
    } else {
      event.name = name;
      event.date = date;
      event.location = location;
      await event.save();
      res.json(event);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// delete an event by id
router.delete('/:id', async (req, res) => {
  const eventId = req.params.id;
  try {
    const event = await Event.findByPk(eventId);
    if (!event) {
      res.status(404).json({ error: 'Event not found' });
    } else {
      await event.destroy();
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
