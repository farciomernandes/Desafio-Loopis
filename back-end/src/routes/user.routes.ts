import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import UsuarioRepository from '../repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';
import authentecadedUser from '../middlewares/authenticadedUser';
import UpdatedUserService from '../services/UpdatedUserService';

const UserRouter = Router();

UserRouter.get('/', async (request, response) => {
  const usersRepository = getCustomRepository(UsuarioRepository);
  const users = await usersRepository.find();

  return response.json(users);
});

UserRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUser = new CreateUserService();
  const user = await createUser.execute({
    name,
    email,
    password,
  });
  return response.json(user);
});

UserRouter.put('/', authentecadedUser, async (request, response) => {
  const { name } = request.body;
  const updatedUser = new UpdatedUserService();

  const user = await updatedUser.execute({
    name,
    id: request.user.id,
  });

  delete user.password;
  return response.json(user);
});

export default UserRouter;
