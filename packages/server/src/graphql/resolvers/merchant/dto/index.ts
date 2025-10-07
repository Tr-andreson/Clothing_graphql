import { MERCHANT_STATUS } from "@/utils/constants";
import { Field, InputType, Int, ObjectType } from "type-graphql";
import { BrandResponseT } from "../../brand/dto";


@ObjectType()
export class MerchantResposeT {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  email: string

  @Field(_type => Int)
  phoneNumber: number

  @Field()
  brandName: string

  @Field(() => BrandResponseT, { nullable: true })
  brand?: BrandResponseT

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
  brand: string

  @Field()
  business: string

  @Field()
  isActive: boolean


  @Field(_type => MERCHANT_STATUS)
  status: MERCHANT_STATUS
}

