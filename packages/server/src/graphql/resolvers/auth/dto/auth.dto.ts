import { InputType, Field, ObjectType } from "type-graphql";
import { BaseResponseDto } from "../../baseDto";

@InputType()
export class RegisterInputT {
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
export class RegisterResponseT {
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



@InputType()
export class LoginInputT {
  @Field()
  email: string;

  // @Field()
  // firstName: string;
  //
  // @Field()
  // lastName: string;
  //
  // @Field()
  // phoneNumber: string;


  @Field()
  password: string;

  // @Field()
  // merchant: string;

  // @Field()
  // provider: string;

  // @Field()
  // role: string;


}


@ObjectType()
export class LoginResponseT extends BaseResponseDto {

  @Field()
  _id: string

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



@ObjectType()
export class Testing {
  @Field()
  name: string

  @Field()
  email: string
}


@ObjectType({ description: "Testing parent" })
export class TestParent {
  @Field()
  status: number

  @Field()
  message: string

  @Field(() => [Testing])
  data: Testing[]

}
