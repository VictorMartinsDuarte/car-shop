import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const carMongooseSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  seatsQty: Number,
  doorsQty: Number,
});

class ModelCars extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('ModelCars', carMongooseSchema)) {
    super(model);
  }
} 

export default ModelCars;