import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const RecommendationCard = ({ recommendation }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={recommendation.image}
        alt={recommendation.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recommendation.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recommendation.description}
        </Typography>
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
