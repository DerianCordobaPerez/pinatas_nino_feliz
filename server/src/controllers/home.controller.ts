import type { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
  res.render('home', {
    title: 'Home',
  });
};
