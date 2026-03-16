
// presentation/graphql/resolvers/AuthResolver.ts
import { AuthUseCase } from "@/application/usecases/auth/AuthUseCase";
import { Arg, Ctx, Mutation, Query, Resolver, } from "type-graphql";
import { LoginInputT, RegisterInputT } from "./dto/auth.dto";
import { GraphQLContext } from "@/utils/constants";
import { CookieService } from "@/infrastructure/services/cookieService";
import { JwtService } from "@/infrastructure/services/tokenService/jwtService";

@Resolver()
export class AuthResolver {
  private readonly authService: AuthUseCase
  private cookieService = new CookieService(); // new way to write class constructor
  private jwtService = new JwtService()

  constructor() {
    this.authService = new AuthUseCase()
  }

  @Mutation(() => String)
  async RegisterUser(@Arg("body") body: RegisterInputT) {
    await this.authService.register(body);
    return "User registered successfully";
  }

  @Mutation(() => String)
  async LoginUser(@Arg("body") body: LoginInputT, @Ctx() { res }: GraphQLContext) {
    const user = await this.authService.login(body);
    const token = await this.jwtService.hash(JSON.stringify(user))
    this.cookieService.setAuthCookie(res, token)
    return "User Login Successfully"
  }

  @Mutation(() => String)
  async LogoutUser(@Ctx() { res }: GraphQLContext) {
    this.cookieService.clearAuthCookie(res)
    return "User Logout Succesfully"
  }

  // -- SESSION NOT IMPLEMENTED YET -------
  @Query(() => String)
  me(@Ctx() { req }: GraphQLContext) {
    return req.session.userId || "Not logged in";
  }


}
