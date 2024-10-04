import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography, CircularProgress } from '@mui/material';

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
      <Typography variant="h4" gutterBottom>
        Recommendations
      </Typography>
      <Grid container spacing={4}>
        {recommendations.map(recommendation => (
          <Grid item key={recommendation.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">{recommendation.title}</Typography>
                <Typography variant="body2">{recommendation.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RecommendationsPage;
