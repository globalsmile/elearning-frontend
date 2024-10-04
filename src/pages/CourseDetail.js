mport React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import EnrollButton from '../components/EnrollButton';

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <EnrollButton courseId={course._id} />
    </div>
  );
};

export default CourseDetail;
