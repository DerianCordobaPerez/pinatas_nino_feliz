import { NativeError } from 'mongoose';
import { use, serializeUser, deserializeUser } from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User, { comparePassword } from '../models/user';
import type { UserDocument } from '../models/user';

use(
  new LocalStrategy({ usernameField: 'email' }, async (email: string, password: string, done): Promise<void> => {
    const user = await User.findOne({ email });

    if (!user) {
      return done(null, false, { message: `Email ${email} not found.` });
    }

    const match = await comparePassword(password, user.password);

    return done(null, user, {
      message: match ? 'Logged in' : 'Wrong password',
    });
  }),
);

serializeUser<any, any>((req, user, done) => {
  done(null, user);
});

deserializeUser((id, done) => {
  User.findById(id, (err: NativeError, user: UserDocument) => done(err, user));
});
