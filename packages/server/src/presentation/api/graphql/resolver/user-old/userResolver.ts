import { UserUseCase } from "@/application/usecases/user/UserUserCase";
import { Query, Resolver } from "type-graphql";
import { UserResponseT } from "./dto/user.dto";

@Resolver()
export class UserResolverGraph {
  private readonly userService: UserUseCase

  constructor() {
    this.userService = new UserUseCase()
  }

  @Query(() => UserResponseT)
  async getUsers() {
    const users = await this.userService.getUsers()
    console.log(users, "graph presentation")
    return users
  }

}
