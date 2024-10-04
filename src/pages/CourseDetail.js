import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import EnrollButton from '../components/EnrollButton';
import { Container, Typography, Card, CardContent, CircularProgress } from '@mui/material';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await axios.get(`/api/courses/${id}`);
      setCourse(response.data);
    };
    fetchCourse();
  }, [id]);

  if (!course) {
    return <CircularProgress />;
  }

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {course.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {course.description}
          </Typography>
          <EnrollButton courseId={course._id} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default CourseDetail;
