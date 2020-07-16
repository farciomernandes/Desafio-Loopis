import { getCustomRepository } from 'typeorm';
import UserRepostiry from '../repositories/UserRepository';
import Usuario from '../models/Usuario';

interface Request {
  name: string;
  email: string;
}

export default class UpdatedUserService {
  public async execute({ name, email }: Request): Promise<Usuario> {
    const usersRepository = getCustomRepository(UserRepostiry);
    const user = await usersRepository.searchUser(email);

    const userUpdated = await usersRepository.create({
      ...user,
      name,
      email,
    });

    await usersRepository.save(userUpdated);
    return userUpdated;
  }
}
