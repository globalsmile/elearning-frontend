// src/controllers/userController.js
import { Router } from 'express';
const router = Router();
import { findById } from '../models/User'; // Assume we have a User model

// Get User Profile
router.get('/profile', async (req, res) => {
  const user = await findById(req.user.id); // Assume req.user is set after authentication

  if (!user) {
    return res.status(404).send('User not found');
  }

  res.status(200).json(user);
});

// Update User Profile
router.put('/profile', async (req, res) => {
  const { name, email } = req.body;
  const user = await findById(req.user.id);

  if (!user) {
    return res.status(404).send('User not found');
  }

  user.name = name || user.name;
  user.email = email || user.email;
  await user.save();

  res.status(200).json(user);
});

export default router;
