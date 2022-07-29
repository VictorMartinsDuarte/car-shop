import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

class ServiceCars implements IService<ICar> {
  private _car:IModel<ICar>;
  
  constructor(model:IModel<ICar>) {
    this._car = model;
  }
}

export default ServiceCars;