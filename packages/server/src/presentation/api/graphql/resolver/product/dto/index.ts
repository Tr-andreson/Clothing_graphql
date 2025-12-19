
import { Contains, IsBoolean, IsNumber, MaxLength, MinLength } from "class-validator";
import { Field, InputType, Int, ObjectType } from "type-graphql";
import { BrandResponseT } from "../../brand/dto";

@ObjectType()
export class ProductT {
  @Field()
  _id: string;

  @Field()
  sku: string;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field({ nullable: true })
  imageKey?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(_type => Int)
  quantity: number;

  @Field(_type => Int)
  price: number;

  @Field()
  taxable: boolean;

  @Field()
  isActive: boolean;

  @Field(() => BrandResponseT, { nullable: true })
  brand?: BrandResponseT

}

@InputType()
export class ProductInputT {
  @Field()
  sku: string;

  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  @MaxLength(10)
  slug: string;

  @Field({ nullable: true })
  @Contains('https')
  imageUrl?: string;

  @Field({ nullable: true })
  imageKey?: string;

  @Field({ nullable: false })
  @MinLength(10, {
    message: "size is too short ! Above 10 words"
  })
  description?: string;

  @Field(_type => Int)
  quantity: number;

  @Field(_type => Int)
  @IsNumber()
  price: number;

  @Field()
  @IsBoolean()
  taxable: boolean;

  @Field()
  @IsBoolean()
  isActive: boolean;

  @Field()
  brand: string;

}
