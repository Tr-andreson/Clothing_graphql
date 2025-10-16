import { UserProfileRepository } from "@/infrastructure/db/typegoose/users/userProfileSchema";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { UserProfileRequest, UserProfileResponse } from "./query";

@Resolver()
export class UserProfileResovler {
  public userRepository: UserProfileRepository
  constructor() {
    this.userRepository = new UserProfileRepository()
  }

  @Mutation(() => String)
  async user_profile(
    @Arg("body") body: UserProfileRequest
  ) {
    await this.userRepository.save(body)
    return "Profile added Succesfully"

  }

  @Query(() => [UserProfileResponse])
  async user_profiles() {
    const profile = await this.userRepository.findAll()
    return profile
  }
}
