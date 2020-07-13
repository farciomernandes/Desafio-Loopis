import { getCustomRepository } from 'typeorm';
import UserRepostiry from '../repositories/UserRepository';
import Usuario from '../models/Usuario';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  id: string;
}

export default class UpdatedUserService {
  public async execute({ name, email, id }: Request): Promise<Usuario> {
    const usersRepository = getCustomRepository(UserRepostiry);

    const user = await usersRepository.findOne(id);

    if (user) {
      throw new AppError('Email is already in use', 400);
    }

    const userUpdated = await usersRepository.create({
      name,
      email,
      id,
    });
    console.log('cheguei com isso: ', userUpdated);

    await usersRepository.save(userUpdated);
    return userUpdated;
  }
}
