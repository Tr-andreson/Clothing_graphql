// domain/repositories/IUserRepository.ts
import { User } from "../entities/User";

export interface IUserRepository {
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User | null>;
  save(user: User): Promise<User>;
}
