import { Request, Response } from 'express';

export const errorHandler = (req: Request, res: Response) => {
    res.statusCode = 500;
    res.json({
        msg: 'Some shit happened here!'
    });
};
