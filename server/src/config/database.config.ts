import { NODE_ENV, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } from './env.config';

export const MONGODB_URL =
  NODE_ENV === 'production'
    ? `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
    : `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
