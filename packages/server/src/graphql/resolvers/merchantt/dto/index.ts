import { MERCHANT_STATUS } from "../../../../utils/constants";
import { Field, InputType, ObjectType, Int } from "type-graphql";


@ObjectType()
export class MerchantResposeT {
  @Field()
  name: string

  @Field()
  email: string

  @Field(_type => Int)
  phoneNumber: number

  @Field()
  brandName: string

  @Field()
  business: string

  @Field()
  isActive: boolean

  @Field()
  status: string
}


@InputType()
export class MerchantRequestT {
  @Field()
  name: string

  @Field()
  email: string


  @Field(_type => Int)
  phoneNumber: number

  @Field()
  brandName: string

  @Field()
  business: string

  @Field()
  isActive: boolean


  @Field(_type => MERCHANT_STATUS)
  status: MERCHANT_STATUS
}

