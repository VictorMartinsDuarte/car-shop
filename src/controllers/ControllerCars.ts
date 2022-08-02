import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

export default class ControllerCars {
  constructor(private _service: IService<ICar>) {}

  public async create(req: Request & { body: ICar }, res: Response<ICar>) {
    const newCar = await this._service.create(req.body);
    return res.status(201).json(newCar);
  }

  public async read(_req: Request, res: Response) {
    const allCars = await this._service.read();
    return res.status(200).json(allCars);
  }

  public async readOne(req: Request, res: Response) {
    const carById = await this._service.readOne(req.params.id);
    return res.status(200).json(carById);
  }

  public async update(req: Request, res: Response<ICar | null>) {
    const updatedCar = await this._service.update(req.params.id, req.body);
    return res.status(200).json(updatedCar);
  }

  public async delete(req: Request, res: Response) {
    await this._service.delete(req.params.id);
    return res.status(204).json();
  }
}