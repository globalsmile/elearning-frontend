import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to eLearning Platform
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button component={Link} to="/login" variant="contained" color="primary" sx={{ m: 1 }}>
            Login
          </Button>
          <Button component={Link} to="/signup" variant="contained" color="secondary" sx={{ m: 1 }}>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;