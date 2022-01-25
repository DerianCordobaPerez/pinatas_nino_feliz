import { Document } from 'mongoose';

/**
 * User types
 */
declare namespace User {
  /**
   * User Document
   */
  type UserDocument = Document & {
    name: string;
    email: string;
    password: string;
    avatar: string;
    comparePassword: ComparePasswordFunction;
  };

  /**
   * Compare Password Function
   */
  type ComparePasswordFunction = (candidatePassword: string, callback: (err: any, isMatch: any) => void) => void;
}

export = User;
