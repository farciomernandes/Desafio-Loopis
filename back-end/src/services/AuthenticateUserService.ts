import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import Usuario from '../models/Usuario';
import AppError from '../errors/AppError';
import authConfig from '../config/auth';

interface Request {
  email: string;
  password: string;
}

interface Response {
  usuario: Usuario;
  token: string;
}

export default class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usuarioRepository = getRepository(Usuario);
    const usuario = await usuarioRepository.findOne({ where: { email } });

    if (!usuario) {
      throw new AppError('Incorrect email/password combination.', 400);
    }
    const passwordIsEqual = await compare(password, usuario.password);

    if (!passwordIsEqual) {
      throw new AppError('Incorrect email/password combination.', 400);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: usuario.id,
      expiresIn,
    });

    return {
      usuario,
      token,
    };
  }
}
