// src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({ name: '', email: '' });

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get('/api/user/profile');
      setProfile(response.data);
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/api/user/profile', profile);
      alert('Profile updated');
    } catch (error) {
      alert('Error updating profile');
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={profile.name} onChange={handleChange} />
        <label>Email:</label>
        <input type="email" name="email" value={profile.email} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Profile;
