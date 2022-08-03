import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import ModelCars from '../../../models/ModelCars';
import ServiceCars from '../../../services/ServiceCars';
// import { ZodError } from 'zod';
// import { ErrorTypes } from '../../../errors/catalog';
import {
  porscheIdMock,
  ferrariIdMock,
  carMock,
  carWithIdMock,
  getAllCarsMock,
  updatedCarMock, 
  updatedCarWithIdMock 
} from '../mocks/mockCars'

describe('Tests on Cars Service layer', () => {
  const modelCars = new ModelCars();
  const serviceCars = new ServiceCars(modelCars);

  before(async () => {
    sinon.stub(modelCars, 'create').resolves(carWithIdMock);
    sinon.stub(modelCars, 'read').resolves(getAllCarsMock);
    sinon.stub(modelCars, 'readOne').resolves(carWithIdMock);
    sinon.stub(modelCars, 'update').resolves(updatedCarWithIdMock);
    sinon.stub(modelCars, 'delete').resolves(carWithIdMock);
  });

  after(()=> sinon.restore());

  describe('Tests the create function', () => {
    it('should returns the created car', async () => {
      const newCar = await serviceCars.create(carMock);
      expect(newCar).to.be.deep.equal(carWithIdMock);
    })
  }),

  describe('Tests the read function', () => {
    it('should returns all cars', async () => {
      const allCars = await serviceCars.read();
      expect(allCars).to.be.deep.equal(getAllCarsMock);
    })
  }),

  describe('Tests the readOne function', () => {
    it('should returns the car with searched id', async () => {
      const searchedCar = await serviceCars.readOne(porscheIdMock);
      expect(searchedCar).to.be.deep.equal(carWithIdMock);
    })
  }),

  describe('Tests the update function', () => {
    it('should returns the updated car document', async () => {
      const updatedCar = await serviceCars.update(ferrariIdMock, updatedCarMock);
      expect(updatedCar).to.be.deep.equal(updatedCarWithIdMock);
    })
  }),

  describe('Tests the delete function', () => {
    it('should remove car with searched id', async () => {
      const removedCar = await serviceCars.delete(porscheIdMock);
      expect(removedCar).to.be.deep.equal(carWithIdMock);
    })
  }),

  it('', async () => {});
});
