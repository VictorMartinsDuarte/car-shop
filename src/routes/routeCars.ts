import { Router } from 'express';
import ModelCars from '../models/ModelCars';

const carsRoute = Router();

const modelCars = new ModelCars();

carsRoute.post('/cars', (req, res) => {});

export default carsRoute;