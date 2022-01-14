import express, { Request, Response, NextFunction } from 'express';

const headers = express.Router();

headers.use(express.json());
headers.use(express.urlencoded({ extended: true }));

headers.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');

  next();
});

export default headers;
