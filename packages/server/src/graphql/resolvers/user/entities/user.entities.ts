import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class UserT {
  @Field(() => ID)
  _id: string;

  @Field()
  email: string;

  @Field()
  phoneNumber: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  password: string;

  @Field()
  merchant?: string;

  @Field()
  provider?: string;

  @Field()
  role?: string;

  @Field()
  created?: Date

  @Field()
  _v?: number
}
