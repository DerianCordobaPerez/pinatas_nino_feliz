import type { Request, Response, NextFunction } from 'express';

export const flash = (req: Request, res: Response, next: NextFunction) => {
  res.locals.user = req.user || null;
  next();
};
