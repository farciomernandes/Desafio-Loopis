import { getCustomRepository } from 'typeorm';
import UsuarioRepository from '../repositories/UserRepository';
import AppError from '../errors/AppError';

export default class DeleteUserService {
  public async execute(id: string): Promise<void> {
    const userRepository = getCustomRepository(UsuarioRepository);

    const SearchUser = await userRepository.findOne(id);
    if (!SearchUser) {
      throw new AppError('User not found! ');
    }

    await userRepository.remove(SearchUser);
  }
}
