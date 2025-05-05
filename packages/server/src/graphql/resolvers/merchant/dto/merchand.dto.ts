import { InputType, Field } from "type-graphql";

@InputType()
export class MerchantInputT {
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
  isActive: boolean;

  // @Field()
  // brand: string;

  // @Field(() => MerchantStatus)  // Apply the enum here
  // status: MerchantStatus;


}
