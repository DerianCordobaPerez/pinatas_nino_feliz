import { NativeError } from 'mongoose';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/user';
import type { UserDocument } from '../types/user-document';

passport.serializeUser<any, any>((req, user, done) => {
  done(undefined, user);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err: NativeError, user: UserDocument) => done(err, user));
});

passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (email: string, password: string, done) => {
    User.findOne({ email: email.toLowerCase() }, (err: NativeError, user: UserDocument) => {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(undefined, false, { message: `El email ${email} no existe.` });
      }

      user.comparePassword(password, (err: NativeError, isMatch: boolean) => {
        if (err) {
          return done(err);
        }

        if (isMatch) {
          return done(undefined, user);
        }

        return done(undefined, false, { message: 'Contraseña incorrecta.' });
      });
    });
  }),
);
