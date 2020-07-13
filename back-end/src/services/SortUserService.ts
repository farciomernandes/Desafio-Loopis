import { getCustomRepository } from 'typeorm';
import UsuarioRepository from '../repositories/UserRepository';
import Usuario from '../models/Usuario';
import AppError from '../errors/AppError';
// import AppError from '../errors/AppError';

export default class SortUserService {
  public async execute(): Promise<Usuario[]> {
    const usersRepository = getCustomRepository(UsuarioRepository);
    const users = await usersRepository.find();

    if (users.length % 2 !== 0) {
      throw new AppError('Applicants must be on an even number to draw ', 400);
    }

    const optionsPergunta = [];

    while (users.length) {
      const index = Math.floor(Math.random() * users.length - 1);

      const [option] = users.splice(index, 1);

      optionsPergunta.push(option);
    }

    return optionsPergunta;
  }
}
