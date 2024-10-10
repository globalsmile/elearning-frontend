// src/pages/CourseCatalog.js
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CourseCard from '../components/CourseCard';

const CourseCatalog = () => {
  const courses = [
    { id: 1, title: 'Course 1', description: 'Description for course 1', image: '/path/to/image1.jpg' },
    { id: 2, title: 'Course 2', description: 'Description for course 2', image: '/path/to/image2.jpg' },
    // Add more courses as needed
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Course Catalog
      </Typography>
      <Grid container spacing={4}>
        {courses.map(course => (
          <Grid item key={course.id} xs={12} sm={6} md={4}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CourseCatalog;