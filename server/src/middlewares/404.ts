import type { Request, Response } from 'express';

export const error404 = (req: Request, res: Response) => {
  res.render('404', {
    title: '404',
  });
};
