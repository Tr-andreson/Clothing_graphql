import { Field, InputType, ObjectType } from "type-graphql";

@InputType()
export class UserAddressRequest {
  @Field()
  user_id: string

  @Field()
  type: string;

  @Field()
  street_address: string;

  @Field()
  apartment?: string

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  country: string;

  @Field()
  zip_code: string;

  @Field()
  phone: string;
}

@ObjectType()
export class UserAddressResponse {
  @Field()
  user_id: string

  @Field()
  type: string;

  @Field()
  street_address: string;

  @Field()
  apartment?: string

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  country: string;

  @Field()
  zip_code: string;

  @Field()
  phone: string;
}
