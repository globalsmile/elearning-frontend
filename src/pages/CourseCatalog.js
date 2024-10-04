import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const CourseCatalog = () => {
  const courses = [
    { id: 1, title: 'Course 1', description: 'Description for course 1' },
    { id: 2, title: 'Course 2', description: 'Description for course 2' },
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
            <Card>
              <CardContent>
                <Typography variant="h5">{course.title}</Typography>
                <Typography variant="body2">{course.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CourseCatalog;
