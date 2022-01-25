import { Schema, model, Error } from 'mongoose';
import { hash, compare, genSalt } from 'bcrypt';
import type { UserDocument, ComparePasswordFunction } from '../types/user-document';

const UserSchema = new Schema<UserDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
  },
  { collection: 'Users', timestamps: true },
);

UserSchema.pre('save', function save(next) {
  const user = this as UserDocument;
  if (!user.isModified('password')) {
    return next();
  }

  genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    hash(user.password, salt, (err: Error, hash) => {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});

const comparePassword: ComparePasswordFunction = function (candidatePassword, callback) {
  compare(candidatePassword, this.password, (error: Error, isMatch: boolean) => {
    callback(error, isMatch);
  });
};

UserSchema.methods.comparePassword = comparePassword;

export default model<UserDocument>('User', UserSchema);
