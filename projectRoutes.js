const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

router.post('/', async (req, res) => {
  const { title, description, members } = req.body;
  const project = await Project.create({ title, description, members });
  res.json(project);
});

router.get('/', async (req, res) => {
  const projects = await Project.find().populate('members');
  res.json(projects);
});

module.exports = router;