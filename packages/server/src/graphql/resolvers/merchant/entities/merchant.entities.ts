import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class MerchantT {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phoneNumber: string;

  @Field()
  brandName: string;

  @Field()
  business: string;

  @Field()
  brand: string;

  @Field()
  status: string;

  @Field()
  isActive: boolean;
}
