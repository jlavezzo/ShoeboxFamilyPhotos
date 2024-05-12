import { Request, Response, NextFunction } from 'express';

import { CustomError } from '../errors/CustomError';

/**
 * Generic function used to gracefully handle any server errors.
 *
 * @param {Request} err The error object causing the issue.
 * @param {Request} err The inbound request.
 * @param {Response} res The response from the request.
 * @param {NextFunction} next Invokes the next route handler OR next middleware in framework.
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.error(err);
  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
