import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import { RequestValidationError } from '../errors/RequestValidationError';

/**
 * Generic function used to validate and return a formatted error
 * object for inbound requests.
 *
 * @param {Request} req The inbound request.
 * @param {Response} res The response from the request.
 * @param {NextFunction} next Invokes the next route handler OR next middleware in framework.
 */
export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  next();
};
