mport React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

const EnrollButton = ({ courseId }) => {
  const handleEnroll = async () => {
    try {
      await axios.post(`/api/courses/${courseId}/enroll`);
      alert('Enrolled in course');
    } catch (error) {
      alert('Error enrolling in course');
    }
  };

  return <Button variant="contained" color="primary" onClick={handleEnroll}>Enroll</Button>;
};

export default EnrollButton;
