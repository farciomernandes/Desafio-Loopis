import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;
  const authenticateUser = new AuthenticateUserService();

  const { usuario, token } = await authenticateUser.execute({
    email,
    password,
  });

  delete usuario.password;

  return response.json({ usuario, token });
});

export default sessionsRouter;
