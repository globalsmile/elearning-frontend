// src/controllers/authController.js
import { Router } from 'express';
const router = Router();
import { findOne } from '../models/User'; // Assume we have a User model
import { randomBytes } from 'crypto';
import { createTransport } from 'nodemailer';

// Forgot Password
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  const user = await findOne({ email });

  if (!user) {
    return res.status(404).send('User not found');
  }

  const token = randomBytes(20).toString('hex');
  user.resetPasswordToken = token;
  user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  await user.save();

  const transporter = createTransport({ /* SMTP settings */ });
  const mailOptions = {
    to: user.email,
    from: 'passwordreset@demo.com',
    subject: 'Password Reset',
    text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
          `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
          `http://localhost:3000/reset/${token}\n\n` +
          `If you did not request this, please ignore this email and your password will remain unchanged.\n`
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Recovery email sent');
  });
});

// Reset Password
router.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;
  const user = await findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() }
  });

  if (!user) {
    return res.status(400).send('Password reset token is invalid or has expired');
  }

  user.password = newPassword; // Ensure to hash the password before saving
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();

  res.status(200).send('Password has been reset');
});

export default router;
