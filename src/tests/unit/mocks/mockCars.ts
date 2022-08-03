import { ICar } from "../../../interfaces/ICar";

export const porscheIdMock = "4edd40c86762e0fb12000003";
export const teslaIdMock = "4edd40c86762e0fb12000004";

export const carMock: ICar = {
  model: "Porsche",
  year: 1992,
  color: "silver",
  buyValue: 3200000,
  seatsQty: 2,
  doorsQty: 2
};

export const carWithIdMock: ICar & { _id: string } = {
  _id: porscheIdMock,
  model: "Porsche",
  year: 1992,
  color: "silver",
  buyValue: 3200000,
  seatsQty: 2,
  doorsQty: 2
};

export const getAllCarsMock: ICar[] & { _id: string }[] = [
  {
    _id: porscheIdMock,
    model: "Porsche",
    year: 1992,
    color: "silver",
    buyValue: 3200000,
    seatsQty: 2,
    doorsQty: 2
  },
  {
    _id: "4edd40c86762e0fb12000009",
    model: "Ferrari",
    year: 1992,
    color: "red",
    buyValue: 3200000,
    seatsQty: 2,
    doorsQty: 2
  }
];

export const updatedCarMock: ICar = {
  model: "Tesla",
  year: 2022,
  color: "golden",
  buyValue: 3200000,
  seatsQty: 2,
  doorsQty: 2
};

export const updatedCarWithIdMock: ICar & { _id: string } = {
  _id: teslaIdMock,
  model: "Tesla",
  year: 2022,
  color: "golden",
  buyValue: 3200000,
  seatsQty: 2,
  doorsQty: 2
};