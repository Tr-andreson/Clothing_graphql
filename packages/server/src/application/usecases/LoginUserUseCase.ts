import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { IHashService } from "@/domain/services/IHashService";

// -------------------- REMOVE THIS USE CASE After using Auth useCase --------------------
// Use Auth Use case 
export class LoginUserUseCase {
  constructor(
    private readonly userRepo: IUserRepository,
    private readonly hashService: IHashService
  ) { }

  async execute(input: { email: string; password: string }): Promise<string> {
    const user = await this.userRepo.findByEmail(input.email);
    if (!user) throw new Error("User not found");

    const isValid = await this.hashService.compare(input.password, user.password);
    if (!isValid) throw new Error("Invalid credentials");

    return "Login success";
  }
}
