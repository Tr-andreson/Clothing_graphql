import { Mutation, Resolver, Arg, Query, Info } from "type-graphql";
import { UserInputT, UserResonseT, UserResponseTT } from "./query";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import { UserRepository } from "@/infrastructure/db/orm/typegoose/users/userSchema";

@Resolver()
export class UserResolver {
  public userRepository: UserRepository
  constructor() {
    this.userRepository = new UserRepository()
  }

  @Mutation(() => String)
  async User(
    @Arg("body") body: UserInputT
  ) {
    const product = await this.userRepository.save(body)
    return product
  }


  @Query(() => [UserResponseTT])
  async Users() {
    const product = await this.userRepository.findAll()
    return product
  }

  @Query(() => [UserResponseTT])
  async Use() {
    const product = await this.userRepository.findAll()
		console.log(product , "Products")
    return product
  }

  @Query(() => [UserResonseT])
  async UsersR(
    @Info() info: GraphQLResolveInfo
  ) {
    const fields = graphqlFields(info);
    const selectedFields = Object.keys(fields).join(" ");
    const product = await this.userRepository.findByObject(selectedFields)
    return product
  }



}
