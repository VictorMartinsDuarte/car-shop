import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import ModelCars from '../../../models/ModelCars';
import { Model } from 'mongoose';
import {
  porscheIdMock,
  teslaIdMock,
  carMock,
  carWithIdMock,
  getAllCarsMock,
  updatedCarMock, 
  updatedCarWithIdMock 
} from '../mocks/mockCars'
// create(obj: T): Promise<T>,
// read(): Promise<T[]>,
// readOne(_id: string): Promise<T | null>,
// update(_id: string, obj: T): Promise<T | null>,
// delete(_id: string): Promise<T | null>,

describe('Tests on Cars Model layer', () => {
  const modelCars = new ModelCars();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carWithIdMock);
    sinon.stub(Model, 'find').resolves(getAllCarsMock);
    sinon.stub(Model, 'findOne').resolves(carWithIdMock);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedCarWithIdMock);
    sinon.stub(Model, 'findByIdAndDelete').resolves(carWithIdMock);
  });

  after(()=> sinon.restore());

  describe('Tests the create function', () => {
    it('should returns the created car', async () => {
      const newCar = await modelCars.create(carMock);
      expect(newCar).to.be.deep.equal(carWithIdMock);
    })
  }),

  describe('Tests the read function', () => {
    it('should returns all cars', async () => {
      const allCars = await modelCars.read();
      expect(allCars).to.be.deep.equal(getAllCarsMock);
    })
  }),

  describe('Tests the readOne function', () => {
    it('should returns the car with searched id', async () => {
      const searchedCar = await modelCars.readOne(porscheIdMock);
      expect(searchedCar).to.be.deep.equal(carWithIdMock);
    })
  }),

  describe('Tests the update function', () => {
    it('should returns the updated car document', async () => {
      const updatedCar = await modelCars.update(teslaIdMock, updatedCarMock);
      expect(updatedCar).to.be.deep.equal(updatedCarWithIdMock);
    })
  }),

  describe('Tests the delete function', () => {
    it('should remove car with searched id', async () => {
      const removedCar = await modelCars.delete(porscheIdMock);
      expect(removedCar).to.be.deep.equal(carWithIdMock);
    })
  }),

  it('', async () => {});
});
