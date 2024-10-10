// src/controllers/enrollmentController.js
import { Router } from 'express';
const router = Router();
import { findById } from '../models/Course'; // Assume we have a Course model
import { findById as _findById } from '../models/User'; // Assume we have a User model

// Enroll in a course
router.post('/courses/:id/enroll', async (req, res) => {
  const course = await findById(req.params.id);
  if (!course) {
    return res.status(404).send('Course not found');
  }

  const user = await _findById(req.user.id); // Assume req.user is set after authentication
  if (!user) {
    return res.status(404).send('User not found');
  }

  user.enrolledCourses.push(course._id);
  await user.save();

  res.status(200).send('Enrolled in course');
});

export default router;
