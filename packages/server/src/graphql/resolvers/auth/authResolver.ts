// presentation/graphql/resolvers/AuthResolver.ts
import { AuthUseCase } from "@/application/usecases/auth/AuthUseCase";
import { Arg, Mutation, Resolver } from "type-graphql";
import { LoginInputT, RegisterInputT } from "./dto/auth.dto";

@Resolver()
export class AuthResolver {
  private readonly authService: AuthUseCase

  constructor() {
    this.authService = new AuthUseCase()
  }

  @Mutation(() => String)
  async registerUser(@Arg("body") body: RegisterInputT) {
    console.log(body)
    await this.authService.register(body);
    return "User registered successfully";
  }

  @Mutation(() => String)
  async loginUser(@Arg("body") body: LoginInputT) {
    return await this.authService.login(body);
  }
}
