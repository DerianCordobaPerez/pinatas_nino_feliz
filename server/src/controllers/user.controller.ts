import { body, check, validationResult } from 'express-validator';
import passport from 'passport';
import User from '../models/user';
import '../config/passport.config';
import { DASHBOARD_PREFIX } from '../config/constants.config';
import type { UserDocument } from '../types/user-document';
import type { Request, Response, NextFunction } from 'express';
import type { IVerifyOptions } from 'passport-local';
import type { NativeError } from 'mongoose';

/**
 * GET /signin
 * @param req
 * @param res
 */
export const signin = (req: Request, res: Response): void => {
  res.render('auth/signin', {
    title: 'Iniciar sesión',
  });
};

/**
 * POST /signin
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
export const handleSignin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await check('email', 'El email no es válido').isEmail().run(req);
  await check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }).run(req);
  await body('email').normalizeEmail({ gmail_remove_dots: false }).run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    req.flash('error', errors.array());
    return res.redirect(`${DASHBOARD_PREFIX}/signin`);
  }

  passport.authenticate('local', (err: Error, user: UserDocument, info: IVerifyOptions) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      req.flash('error', { message: info.message });
      return res.redirect(`${DASHBOARD_PREFIX}/signin`);
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      req.flash('success', { message: `Bienvenido de nuevo ${user.name}` });
      res.redirect('/');
    });
  })(req, res, next);
};

/**
 * GET /signup
 * @param req
 * @param res
 */
export const signup = (req: Request, res: Response): void => {
  res.render('auth/signup', {
    title: 'Registrarse',
  });
};

/**
 * POST /signup
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
export const handleSignup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await check('name', 'El nombre no es válido').isLength({ min: 1 }).run(req);
  await check('email', 'El email no es válido').isEmail().run(req);
  await check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }).run(req);
  await body('email').normalizeEmail({ gmail_remove_dots: false }).run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    req.flash('error', errors.array());
    return res.redirect('/admin/dashboard/signup');
  }

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    avatar: req.file.originalname,
  });

  User.findOne({ email: req.body.email }, (err: NativeError, existingUser: UserDocument) => {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      req.flash('error', { message: 'El correo electrico ya se encuentra registrado.' });
      return res.redirect('/admin/dashboard/signup');
    }

    user.save((err) => {
      if (err) {
        return next(err);
      }

      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }

        res.redirect('/');
      });
    });
  });
};

/**
 * GET / logout
 * @param req
 * @param res
 */
export const logout = (req: Request, res: Response): void => {
  req.logout();
  req.flash('success', { message: 'Has cerrado sesión' });
  res.redirect('/admin/dashboard/signin');
};
