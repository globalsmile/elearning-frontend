// src/controllers/courseController.js
const express = require('express');
const router = express.Router();
const Course = require('../models/Course'); // Assume we have a Course model

// Get all courses
router.get('/courses', async (req, res) => {
  const courses = await Course.find();
  res.status(200).json(courses);
});

// Get course by ID
router.get('/courses/:id', async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    return res.status(404).send('Course not found');
  }
  res.status(200).json(course);
});

module.exports = router;
