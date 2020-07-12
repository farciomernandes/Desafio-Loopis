import express, { NextFunction, Response, Request } from 'express';
import 'express-async-errors';

import routes from './routes';
import './database';

// Libs que pemitem o uso estatico e tratamento de erros
import 'reflect-metadata';
import AppError from './errors/AppError';

const app = express();
app.use(express.json());
app.use(routes);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
