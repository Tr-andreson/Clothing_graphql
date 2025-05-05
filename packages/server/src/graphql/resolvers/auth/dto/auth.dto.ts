import { InputType, Field } from "type-graphql";

@InputType()
export class AuthInputT {
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
}

@InputType()
export class AuthLoginT {
  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class AuthForgotT {

  @Field()
  email: string;

}
