import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

export default Usuario;
