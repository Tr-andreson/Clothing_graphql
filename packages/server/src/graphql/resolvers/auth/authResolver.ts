// presentation/graphql/resolvers/AuthResolver.ts
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { RegisterInputT, LoginInputT, RegisterResponseT } from "./dto/auth.dto";
import { LoginUserUseCase } from "@/application/usecases/LoginUserUseCase";
import { RegisterUserUseCase } from "@/application/usecases/RegisterUserUseCase";
import { UserRepository } from "@/infrastructure/db/mongodb/userModel";
import { BcryptService } from "@/infrastructure/services/hashingService/bcrypt.service";

@Resolver()
export class AuthResolver {
  private readonly registerUser: RegisterUserUseCase;
  private readonly loginUser: LoginUserUseCase;
  private readonly userRepo: UserRepository;

  constructor() {
    const userRepo = new UserRepository();
    const hashService = new BcryptService();
    this.userRepo = userRepo;

    this.registerUser = new RegisterUserUseCase(userRepo, hashService);
    this.loginUser = new LoginUserUseCase(userRepo, hashService);
  }

  @Query(() => [RegisterResponseT])
  async Users() {
    return this.userRepo.findAll();
  }

  @Mutation(() => String)
  async registerUserMutation(@Arg("body") body: RegisterInputT) {
    await this.registerUser.execute(body);
    return "User registered successfully";
  }

  @Mutation(() => String)
  async loginUserMutation(@Arg("body") body: LoginInputT) {
    return await this.loginUser.execute(body);
  }
} 
