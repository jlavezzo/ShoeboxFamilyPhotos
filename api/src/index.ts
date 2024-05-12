export * from './errors/BadRequestError';
export * from './errors/CustomError';
export * from './errors/DatabaseConnectionError';
export * from './errors/NotAuthorizedError';
export * from './errors/NotFoundError';
export * from './errors/RequestValidationError';

export * from './logs/logger';

export * from './middlewares/errorHandler';
export * from './middlewares/validateRequest';


import { app } from './app';

const start = async () => {
  console.log('Starting......');

  app.listen(4000, () => {
    console.log('Listening on port 4000 ...');
  });
};

start();
