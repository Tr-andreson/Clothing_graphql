import { User } from "@/domain/entities/User";
import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { IHashService } from "@/domain/services/IHashService";

export class AuthUseCase {
  constructor(
    private readonly userRepo: IUserRepository,
    private readonly hashService: IHashService
  ) { }


  public async login(input: { email: string, password: string }) {
    const user = await this.userRepo.findByEmail(input.email);
    if (!user) throw new Error("User not found");
    const isValid = await this.hashService.compare(input.password, user.password);
    if (!isValid) throw new Error("Invalid credentials");

    return "Login success";

  }

  public async register(
    input: {
      email: string,
      firstName: string,
      lastName: string,
      password: string,
      phoneNumber?: string,
      provider?: string
    }
  ) {

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
