import { getAuth, signInWithCustomToken } from 'firebase/auth';
import { NextFunction, Response, Request } from 'express';

const auth = getAuth();
const token = process.env.FIREBASE_TOKEN;

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (!token) {
    return res.status(401).json({
      message: 'No token provided',
    });
  }

  signInWithCustomToken(auth, token)
    .then(({ user }) => {
      res.locals.user = user;
      next();
    })
    .catch((error) =>
      res.status(401).json({
        message: error,
      }),
    );
};
