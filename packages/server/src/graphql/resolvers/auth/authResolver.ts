// presentation/graphql/resolvers/AuthResolver.ts
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { RegisterInputT, LoginInputT, RegisterResponseT } from "./dto/auth.dto";
import { RegisterUserUseCase } from "../../../application/usecases/RegisterUserUseCase";
import { LoginUserUseCase } from "../../../application/usecases/LoginUserUseCase";
import { BcryptService } from "../../../infrastructure/services/hashingService/bcrypt.service";
import { UserRepository } from "../../../infrastructure/db/mongodb/userModel";
import { RedisService } from "@/infrastructure/services/cachingService/ioredis";

@Resolver()
export class AuthResolver {
  private readonly registerUser: RegisterUserUseCase;
  private readonly loginUser: LoginUserUseCase;
  private readonly userRepo: UserRepository;
  private readonly cacheService: RedisService

  constructor() {
    const userRepo = new UserRepository();
    const hashService = new BcryptService();
    this.userRepo = userRepo;

    this.registerUser = new RegisterUserUseCase(userRepo, hashService);
    this.loginUser = new LoginUserUseCase(userRepo, hashService);
    this.cacheService = new RedisService()
  }

  @Query(() => [RegisterResponseT])
  async Users() {
    let cacheKey = "user"
    let cachedUser = await this.cacheService.get(cacheKey)
    console.log(cachedUser, "cachedUser debug");
    if (cachedUser) return cachedUser

    let users = await this.userRepo.findAll()
    await this.cacheService.set({
      key: "user",
      value: users
    })
    return users
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
