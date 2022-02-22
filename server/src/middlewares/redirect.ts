import type { Request, Response, NextFunction } from 'express';

export const redirect = (req: Request, res: Response, next: NextFunction): void => {
  if (
    (!req.user && req.path !== '/signin' && req.path !== '/signup' && !req.path.match(/\./)) ||
    (req.user && req.path === '/account')
  ) {
    req.session.returnTo = req.path;
  }
  next();
};
