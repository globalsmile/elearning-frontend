// src/components/EnrollButton.js
import React from 'react';
import axios from 'axios';

const EnrollButton = ({ courseId }) => {
  const handleEnroll = async () => {
    try {
      await axios.post(`/api/courses/${courseId}/enroll`);
      alert('Enrolled in course');
    } catch (error) {
      alert('Error enrolling in course');
    }
  };

  return (
    <button onClick={handleEnroll}>Enroll</button>
  );
};

export default EnrollButton;
