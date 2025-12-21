import { Arg, Mutation, Resolver } from "type-graphql";
import { UserAddressRequest } from "./query";
import { UserAddressRepository } from "@/infrastructure/db/orm/typegoose/users/userAddressSchema";


@Resolver()
export class UserAddressResolver {
  public readonly UserAddress: UserAddressRepository
  constructor() {
    this.UserAddress = new UserAddressRepository()
  }

  @Mutation(() => String)
  async User_Address(
    @Arg("body") body: UserAddressRequest
  ) {
    await this.UserAddress.save(body)
    return "User added Succesfully"
  }


}
