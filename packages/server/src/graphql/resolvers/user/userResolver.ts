
import { User } from "../../../db/modals/user.modal";
import { Ctx, Query, Resolver } from "type-graphql";
import { UserT } from "./entities/user.entities";


@Resolver()
export class UserResolver {
  // TODO : get users
  @Query(() => [UserT])
  public async getUsers(): Promise<UserT[] | any> {
    try {
      const users = await User.find()
      return users

    } catch (error) {
      return "error"

    }
  }


  // TODO : get current user
  @Query(() => UserT)
  public async me(
    @Ctx("req") req: Request
  ): Promise<any> {
    // @ts-ignore
    if (!req.session.userId) {
      return null
    }

    // @ts-ignore
    const findvalue = await User.findById(req.session.userId)

    // @ts-ignore
    console.log(findvalue, "ffffffffff")

    return findvalue

  }



}
