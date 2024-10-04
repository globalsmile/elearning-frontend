import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText, CircularProgress } from '@mui/material';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get('/api/courses');
      setCourses(response.data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Courses
      </Typography>
      <List>
        {courses.map(course => (
          <ListItem key={course._id} button component={Link} to={`/courses/${course._id}`}>
            <ListItemText primary={course.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CourseList;
