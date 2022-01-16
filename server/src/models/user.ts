import { Document, Schema, model } from 'mongoose';

declare interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});

export default model<IUser>('User', UserSchema);
