import { Document, Schema, model, Types } from 'mongoose';
import { hashSync, compareSync, genSaltSync } from 'bcrypt';

export declare interface AuthToken {
  accessToken: string;
  kind: string;
}

export type UserDocument = Document & {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  avatar: string;
  tokens: AuthToken[];
};

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
    tokens: Array,
  },
  { collection: 'Users', timestamps: true },
);

const User = model<UserDocument>('User', UserSchema);

export async function encryptPassword(password: string): Promise<string> {
  const salt = await genSaltSync(10);
  return await hashSync(password, salt);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return await compareSync(password, hash);
}

export async function findUserByEmail(email: string): Promise<boolean> {
  const user = await User.findOne({ email });
  return user !== null;
}

export default User;
