mport React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Recommended Courses for You</h2>
      <ul>
        {recommendedCourses.map(course => (
          <li key={course._id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
