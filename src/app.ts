import express from 'express';
import carsRouter from './routes/routeCars';
import errorHandler from './middlewares/middleError';

const app = express();
app.use(express.json());

app.use(carsRouter);

app.use(errorHandler);

export default app;
