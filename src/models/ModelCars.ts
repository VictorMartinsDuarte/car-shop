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

  // public async read():Promise<ICar[]> {
  //     throw new Error('Not implemented');
  //   }
  
  //   public async readOne(_id: string): Promise<ICar | null> {
  //     throw new Error('Not implementede');
  //   }
  
  //   public async update(_id: string, _body: T): Promise<ICar | null> {
  //     throw new Error('Not implementedi');
  //   }
  
  //   public async delete(_id: string): Promise<ICar | null> {
  //     throw new Error('Not implementeder');
  //   }
} 

export default ModelCars;