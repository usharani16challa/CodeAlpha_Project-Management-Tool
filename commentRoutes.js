const express = require('express');
const Comment = require('../models/Comment');

const router = express.Router();

router.post('/', async (req, res) => {
  const { taskId, user, message } = req.body;
  const comment = await Comment.create({ taskId, user, message });
  res.json(comment);
});

router.get('/:taskId', async (req, res) => {
  const comments = await Comment.find({ taskId: req.params.taskId }).populate('user');
  res.json(comments);
});

module.exports = router;