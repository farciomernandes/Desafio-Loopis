import { Router } from 'express';
import userRouter from './user.routes';
import Sessions from './sessions.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/sessions', Sessions);

export default routes;
