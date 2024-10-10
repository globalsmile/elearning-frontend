// src/pages/CourseList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, CircularProgress } from '@mui/material';
import CourseCard from '../components/CourseCard';

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
      <Grid container spacing={4}>
        {courses.map(course => (
          <Grid item key={course._id} xs={12} sm={6} md={4}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CourseList;