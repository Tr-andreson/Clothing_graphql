import { InputType, Field, Query, ObjectType } from "type-graphql";

@InputType()
export class AuthInputT {

  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  phoneNumber: string;


  @Field()
  password: string;

  // @Field()
  // merchant: string;

  @Field()
  provider: string;

  // @Field()
  // role: string;


}


@ObjectType()
export class AuthResponseT {
  @Field()
  id: string

  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  phoneNumber: string;


  @Field()
  password: string;

  @Field()
  merchant: string;

  @Field()
  provider: string;

  @Field()
  role: string;

  @Field()
  created?: Date;

}

