// src/pages/Dashboard.js
import React, { useState } from 'react';
import { Container, Tabs, Tab, Box } from '@mui/material';
import CourseCatalog from './CourseCatalog';
import CourseDetail from './CourseDetail';
import CourseList from './CourseList';
import Profile from './Profile';
import RecommendationsPage from './RecommendationsPage';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container>
      <Tabs value={selectedTab} onChange={handleChange} aria-label="dashboard tabs">
        <Tab label="Course Catalog" />
        <Tab label="Course Detail" />
        <Tab label="Course List" />
        <Tab label="Profile" />
        <Tab label="Recommendations" />
      </Tabs>
      <Box sx={{ paddingTop: 2 }}>
        {selectedTab === 0 && <CourseCatalog />}
        {selectedTab === 1 && <CourseDetail />}
        {selectedTab === 2 && <CourseList />}
        {selectedTab === 3 && <Profile />}
        {selectedTab === 4 && <RecommendationsPage />}
      </Box>
    </Container>
  );
};

export default Dashboard;