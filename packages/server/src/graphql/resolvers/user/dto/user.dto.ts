import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserResponseT {
  @Field()
  _id: string

  @Field()
  email: string;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  phone: string;

  @Field()
  password_hash: string;

  @Field({ nullable: true })
  merchant: string;

  @Field()
  provider: string;

  @Field()
  role: string;

  @Field()
  created?: Date;
}
