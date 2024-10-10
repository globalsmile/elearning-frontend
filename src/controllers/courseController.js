// src/controllers/courseController.js
import { Router } from 'express';
const router = Router();
import { find, findById } from '../models/Course'; // Assume we have a Course model

// Get all courses
router.get('/courses', async (req, res) => {
  const courses = await find();
  res.status(200).json(courses);
});

// Get course by ID
router.get('/courses/:id', async (req, res) => {
  const course = await findById(req.params.id);
  if (!course) {
    return res.status(404).send('Course not found');
  }
  res.status(200).json(course);
});

export default router;
