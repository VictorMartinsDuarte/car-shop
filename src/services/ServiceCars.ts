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
    if (!parsedZod.success) throw parsedZod.error;

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

  public async update(_id: string, obj: ICar): Promise<ICar | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);
    
    const parsedZod = CarZodSchema.safeParse(obj);
    if (!parsedZod.success) throw parsedZod.error;

    const carExists = await this.readOne(_id);
    console.log(carExists);
    if (!carExists) throw new Error(ErrorTypes.ObjectNotFound);

    return this._car.update(_id, obj);
  }

  // public async delete(_id: string): Promise<ICar | null> {
  //   throw new Error('Not implementeder');
  // }
}