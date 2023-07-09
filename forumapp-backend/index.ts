import express from 'express';
import apiRouter from './routes/routes';

const app = express();

// Add any necessary middleware here

// Parse incoming JSON requests
app.use(express.json());

// Mount the API router
app.use('/api', apiRouter);

// Implement other middleware and global error handling as needed

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


