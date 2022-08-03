import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import ModelCars from '../../../models/ModelCars';
import ServiceCars from '../../../services/ServiceCars';
import ControllerCars from '../../../controllers/ControllerCars';
import { Request, Response, NextFunction } from 'express';
import {
  porscheIdMock,
  ferrariIdMock,
  carMock,
  carWithIdMock,
  getAllCarsMock,
  updatedCarMock, 
  updatedCarWithIdMock 
} from '../mocks/mockCars'

describe('Tests on Cars Controller layer', () => {
  const modelCars = new ModelCars();
  const serviceCars = new ServiceCars(modelCars);
  const controllerCars = new ControllerCars(serviceCars);

  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(serviceCars, 'create').resolves(carWithIdMock);
    sinon.stub(serviceCars, 'read').resolves(getAllCarsMock);
    sinon.stub(serviceCars, 'readOne').resolves(carWithIdMock);
    sinon.stub(serviceCars, 'update').resolves(updatedCarWithIdMock);
    sinon.stub(serviceCars, 'delete').resolves(carWithIdMock);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=> sinon.restore());

  describe('Tests the create function', () => {
    it('should returns status 201 and created car', async () => {
      req.body = carMock;
      await controllerCars.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carWithIdMock)).to.be.true;
    })
  }),

  describe('Tests the read function', () => {
    it('should returns status 200 and all cars', async () => {
      await controllerCars.read(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(getAllCarsMock)).to.be.true;
    })
  }),

  describe('Tests the readOne function', () => {
    it('should returns status 200 and the car with searched id', async () => {
      req.params = { id: porscheIdMock };
      await controllerCars.readOne(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carWithIdMock)).to.be.true;
    })
  }),

  describe('Tests the update function', () => {
    it('should returns status 200 and the updated car document', async () => {
      req.params = { id: ferrariIdMock };
      req.body = updatedCarMock;
      await controllerCars.update(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(updatedCarWithIdMock)).to.be.true;
    })
  }),

  describe('Tests the delete function', () => {
    it('should remove car with searched id', async () => {
      req.params = { id: porscheIdMock };
      await controllerCars.delete(req, res);
      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carWithIdMock)).to.be.true;
    })
  }),

  it('', async () => {});
});
