export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
  EmptyObject = 'EmptyObject',
}

type ErrorResponseObject = {
  httpStatus: number;
  message: string;
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    httpStatus: 404,
    message: 'Entity not found',
  },
  InvalidMongoId: {
    httpStatus: 400,
    message: 'Invalid Mongo ID',
  },
  EmptyObject: {
    httpStatus: 400,
    message: 'Object is empty',
  },
};