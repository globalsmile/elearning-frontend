// src/controllers/recommendationController.js
import { Router } from 'express';
const router = Router();
import { getRecommendedCourses } from '../utils/recommendationEngine';

router.get('/recommendations', async (req, res) => {
  const userId = req.user.id; // Assume req.user is set after authentication
  const recommendedCourses = await getRecommendedCourses(userId);
  res.json(recommendedCourses);
});

export default router;
