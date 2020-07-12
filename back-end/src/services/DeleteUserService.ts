import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import UsuarioRepository from '../repositories/UserRepository';
import AppError from '../errors/AppError';

interface Request {
  email: string;
  password: string;
}

export default class DeleteUserService {
  public async execute({ email, password }: Request): Promise<any> {
    const userRepository = getCustomRepository(UsuarioRepository);

    const SearchUser = await userRepository.findOne({
      where: { email },
    });

    if (!SearchUser) {
      throw new AppError('Email or Password is not correct!', 401);
    }
    const IsUser = await compare(password, SearchUser.password);

    if (!IsUser) {
      throw new AppError('Email or Password is not correct!', 401);
    }

    await userRepository.delete(SearchUser);

    return {
      status: 'User deleted from sucess!',
    };
  }
}
