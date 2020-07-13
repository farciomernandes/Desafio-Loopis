import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import UsuarioRepository from '../repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';
import UpdatedUserService from '../services/UpdatedUserService';
import DeleteUserService from '../services/DeleteUserService';
import SortUserService from '../services/SortUserService';

const UserRouter = Router();

UserRouter.get('/', async (request, response) => {
  const usersRepository = getCustomRepository(UsuarioRepository);
  const users = await usersRepository.find();

  return response.json(users);
});

UserRouter.post('/', async (request, response) => {
  const { name, email } = request.body;
  const createUser = new CreateUserService();
  const user = await createUser.execute({
    name,
    email,
  });
  response.json(user);
});

UserRouter.put('/', async (request, response) => {
  const { name, email, id } = request.body;

  const updatedUser = new UpdatedUserService();
  const user = await updatedUser.execute({
    name,
    email,
    id,
  });
  return response.json(user);
});

UserRouter.delete('/', async (request, response) => {
  const { id } = request.body;
  const deleteUser = new DeleteUserService();

  await deleteUser.execute(id);

  return response.status(204).send();
});

UserRouter.get('/sort', async (request, response) => {
  const sortedUsers = new SortUserService();
  const sorted = await sortedUsers.execute();
  return response.json(sorted);
});

export default UserRouter;
