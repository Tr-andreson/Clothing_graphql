import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { IHashService } from "../../domain/services/IHashService";
import { User } from "../../domain/entities/User";

export class RegisterUserUseCase {
  constructor(
    private readonly userRepo: IUserRepository,
    private readonly hashService: IHashService
  ) { }

  async execute(input: {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    phoneNumber?: string,
    provider?: string
  }): Promise<User> {
    const hashedPassword = await this.hashService.hash(input.password);
    const newUser = new User(
      input.email,
      input.firstName,
      input.lastName,
      hashedPassword,
      input.phoneNumber,
      input.provider
    );
    return await this.userRepo.save(newUser);
  }
}
