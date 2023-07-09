import express from 'express';
import apiRouter from './routes/routes';

const app = express();

s
app.use(express.json());

// Mount the API router
app.use('/api', apiRouter);



const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


