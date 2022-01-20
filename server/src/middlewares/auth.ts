import { find } from 'lodash';
import type { Request, Response, NextFunction } from 'express';
import type { UserDocument } from '../models/user';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

export const isAuthorized = (req: Request, res: Response, next: NextFunction) => {
  const [provider] = req.path.split('/').slice(-1);
  const user = req.user as UserDocument;

  if (find(user.tokens, { kind: provider })) {
    return next();
  }

  res.redirect(`/auth/${provider}`);
};
