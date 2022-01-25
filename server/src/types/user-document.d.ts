import { Document } from 'mongoose';

declare namespace User {
  type UserDocument = Document & {
    name: string;
    email: string;
    password: string;
    avatar: string;
    comparePassword: ComparePasswordFunction;
  };

  type ComparePasswordFunction = (candidatePassword: string, callback: (err: any, isMatch: any) => void) => void;
}

export = User;
