import { Field, InputType, ObjectType } from "type-graphql";
import { UserAddressResponse } from "../../user_address/query";
import { UserProfileResponse } from "../../user_profile/query";

@InputType()
export class UserInputT {
  @Field()
  email: string

  @Field()
  password_hash: string


  @Field()
  first_name: string

  @Field()
  last_name: string


  @Field()
  phone: number
}

@ObjectType()
export class UserResonseT {
  @Field()
  _id: string

  @Field()
  email: string

  @Field()
  password_hash: string


  @Field()
  first_name: string

  @Field()
  last_name: string


  @Field()
  phone: number

  @Field(() => [UserAddressResponse])
  address: [UserAddressResponse]

  @Field(() => [UserProfileResponse])
  profile: [UserProfileResponse]
}

@ObjectType()
export class UserResponseTT {
  @Field()
  _id: string

  @Field()
  email: string

}
