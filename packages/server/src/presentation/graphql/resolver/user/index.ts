import { Mutation, Resolver, Arg, Query, Info } from "type-graphql";
import { UserInputT, UserResonseT } from "./query";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import { UserRepository } from "@/infrastructure/db/typegoose/users/userSchema";

@Resolver()
export class UserResolver {
  public userRepository: UserRepository
  constructor() {
    this.userRepository = new UserRepository()
  }

  @Mutation(() => String)
  async user(
    @Arg("body") body: UserInputT
  ) {
    const product = await this.userRepository.save(body)
    return product
  }


  @Query(() => [UserResonseT])
  async users() {
    const product = await this.userRepository.findAll()
    console.dir(product, { depth: null });
    return product
  }

  @Query(() => [UserResonseT])
  async userR(
    @Info() info: GraphQLResolveInfo
  ) {
    const fields = graphqlFields(info);
    const selectedFields = Object.keys(fields).join(" ");
    const product = await this.userRepository.findByObject(selectedFields)
    return product
  }



}
