import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { ErrorTypes, errorCatalog } from '../errors/catalog';

const errorHandler: ErrorRequestHandler = (
  err: Error | ZodError,
  _req,
  res,
  _next,
) => {
  console.log('Cheguei aqui');
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.message });
  } 
  const errorTypeMessage = err.message as keyof typeof ErrorTypes;

  const mappedError = errorCatalog[errorTypeMessage];

  if (mappedError) {
    const { httpStatus, message } = mappedError;
    return res.status(httpStatus).json({ message });
  }

  return res.status(500).json({ message: err.message });
};

export default errorHandler;