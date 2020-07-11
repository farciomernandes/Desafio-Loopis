import { getRepository } from 'typeorm';
import Usuario from '../models/Usuario';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  id: string;
}

export default class UpdatedUserService {
  public async execute({ name, id }: Request): Promise<Usuario> {
    const usersRepository = getRepository(Usuario);

    const user = await usersRepository.findOne(id);
    if (!user) {
      throw new AppError('Only authenticaded users can change name', 400);
    }

    const userUpdated = await usersRepository.create({
      ...user,
      name,
    });
    await usersRepository.save(userUpdated);
    return userUpdated;
  }
}
