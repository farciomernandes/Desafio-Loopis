import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Usuario from '../models/Usuario';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<Usuario> {
    const usuarioRepository = getRepository(Usuario);

    const checkExist = await usuarioRepository.findOne({
      where: { email }, // Procura um usuário especifico de acordo com os dados enviados.
    });

    if (checkExist) {
      throw new AppError('Email is not disponible!');
    }

    const cryptedPassword = await hash(password, 8);

    const user = usuarioRepository.create({
      name,
      email,
      password: cryptedPassword,
    });
    await usuarioRepository.save(user);
    return user;
  }
}
