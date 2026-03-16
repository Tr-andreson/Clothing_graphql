import { User } from "@/domain/entities/User";
import { UserRepository } from "@/infrastructure/db/orm/mongoose/userModel";
import { BcryptService } from "@/infrastructure/services/hashingService/bcrypt.service";

export class AuthUseCase {
  private readonly userRepo: UserRepository
  private readonly hashService: BcryptService
  constructor(
  ) {
    this.userRepo = new UserRepository()
    this.hashService = new BcryptService()
  }


  public async login(input: { email: string, password: string }) {
    const user = await this.userRepo.findByEmail(input.email);
    if (!user) throw new Error("User not found");
    const isValid = await this.hashService.compare(input.password, user.password);
    if (!isValid) throw new Error("Invalid credentials");

    return user;

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
