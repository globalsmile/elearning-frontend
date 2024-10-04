// src/pages/ResetPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/reset-password', { token, newPassword });
      alert('Password has been reset');
    } catch (error) {
      alert('Error resetting password');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <label>New Password:</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResetPassword;
