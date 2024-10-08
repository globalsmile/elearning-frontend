// src/pages/RecommendationsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, CircularProgress } from '@mui/material';
import RecommendationCard from '../components/RecommendationCard';

const RecommendationsPage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const response = await axios.get('/api/recommendations');
      setRecommendations(response.data);
      setLoading(false);
    };
    fetchRecommendations();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container>
      <Grid container spacing={4}>
        {recommendations.map(recommendation => (
          <Grid item key={recommendation.id} xs={12} sm={6} md={4}>
            <RecommendationCard recommendation={recommendation} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RecommendationsPage;