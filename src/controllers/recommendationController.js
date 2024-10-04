// src/controllers/recommendationController.js
const express = require('express');
const router = express.Router();
const { getRecommendedCourses } = require('../utils/recommendationEngine');

router.get('/recommendations', async (req, res) => {
  const userId = req.user.id; // Assume req.user is set after authentication
  const recommendedCourses = await getRecommendedCourses(userId);
  res.json(recommendedCourses);
});

module.exports = router;
