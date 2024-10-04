import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const CourseCard = ({ course }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={course.image}
        alt={course.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.description}
        </Typography>
        <Button variant="contained" color="primary">
          Enroll Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
