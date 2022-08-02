import { isValidObjectId } from 'mongoose';
import { IService } from '../interfaces/IService';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

export default class ServiceCars implements IService<ICar> {
  private _car:IModel<ICar>;
  
  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj:ICar):Promise<ICar> {
    const parsedZod = CarZodSchema.safeParse(obj);
    if (!parsedZod.success) {
      console.log(parsedZod.error.issues);
      throw parsedZod.error;
    }

    return this._car.create(obj);
  }

  public async read():Promise<ICar[]> {
    return this._car.read();
  }

  public async readOne(_id: string): Promise<ICar | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);

    const carById = await this._car.readOne(_id);
    if (!carById) throw new Error(ErrorTypes.ObjectNotFound);
  
    return carById;
  }

  // public async update(_id: string, _body: T): Promise<ICar | null> {
  //   throw new Error('Not implementedi');
  // }

  // public async delete(_id: string): Promise<ICar | null> {
  //   throw new Error('Not implementeder');
  // }
}