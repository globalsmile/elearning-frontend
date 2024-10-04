// src/pages/ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/forgot-password', { email });
      alert('Recovery email sent');
    } catch (error) {
      alert('Error sending recovery email');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
