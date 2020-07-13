import { getRepository } from 'typeorm';
import Usuario from '../models/Usuario';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
}

export default class CreateUserService {
  public async execute({ name, email }: Request): Promise<Usuario> {
    const usuarioRepository = getRepository(Usuario);

    const checkExist = await usuarioRepository.findOne({
      where: { email }, // Procura um usuário especifico de acordo com os dados enviados.
    });

    if (checkExist) {
      throw new AppError('Email is not disponible!');
    }

    const user = usuarioRepository.create({
      name,
      email,
    });
    await usuarioRepository.save(user);
    return user;
  }
}
