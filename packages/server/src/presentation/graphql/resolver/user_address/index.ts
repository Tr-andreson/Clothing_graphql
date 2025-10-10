import { UserAddressRepository } from "@/infrastructure/db/typegoose/userAddressSchema";
import { Arg, Mutation, Resolver } from "type-graphql";
import { UserAddressRequest } from "./query";

@Resolver()
export class UserAddressResolver {
  public readonly UserAddress: UserAddressRepository
  constructor() {
    this.UserAddress = new UserAddressRepository()
  }

  @Mutation(() => String)
  async user_address(
    @Arg("body") body: UserAddressRequest
  ) {
    await this.UserAddress.save(body)
    return "User added Succesfully"
  }


}
