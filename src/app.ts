import express from 'express';
import carsRouter from './routes/routeCars';

const app = express();
app.use(carsRouter);

export default app;
