import express, { json } from 'express';
import { connect } from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(json());

// MongoDB connection
connect('mongodb://localhost:27017/elearning', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
