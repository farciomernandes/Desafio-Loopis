import { EntityRepository, Repository } from 'typeorm';
import Usuario from '../models/Usuario';

@EntityRepository(Usuario)
class UserRepository extends Repository<Usuario> {
  public async searchUser(email: string): Promise<Usuario | null> {
    const existUser = await this.findOne({
      where: { email },
    });
    return existUser || null;
  }
}

export default UserRepository;
