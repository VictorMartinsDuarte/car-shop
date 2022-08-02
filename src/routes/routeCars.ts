import { Router } from 'express';
import ModelCars from '../models/ModelCars';
import ServiceCars from '../services/ServiceCars';
import ControllerCars from '../controllers/ControllerCars';

const carsRoute = Router();

const modelCars = new ModelCars();
const serviceCars = new ServiceCars(modelCars);
const controllerCars = new ControllerCars(serviceCars);

carsRoute.post('/cars', (req, res) => controllerCars.create(req, res));
carsRoute.get('/cars', (req, res) => controllerCars.read(req, res));
carsRoute.get('/cars/:id', (req, res) => controllerCars.readOne(req, res));

export default carsRoute;