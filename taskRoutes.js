const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

router.post('/', async (req, res) => {
  const { projectId, title, description, assignedTo } = req.body;
  const task = await Task.create({ projectId, title, description, assignedTo });
  res.json(task);
});

router.get('/:projectId', async (req, res) => {
  const tasks = await Task.find({ projectId: req.params.projectId }).populate('assignedTo');
  res.json(tasks);
});

module.exports = router;