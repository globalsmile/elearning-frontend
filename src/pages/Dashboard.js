import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Dashboard = () => {
  const [recommendedCourses, setRecommendedCourses] = useState([]);

  useEffect(() => {
    const fetchRecommendedCourses = async () => {
      const response = await axios.get('/api/recommendations');
      setRecommendedCourses(response.data);
    };
    fetchRecommendedCourses();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Recommended Courses for You
      </Typography>
      <List>
        {recommendedCourses.map(course => (
          <ListItem key={course._id}>
            <ListItemText primary={course.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Dashboard;
