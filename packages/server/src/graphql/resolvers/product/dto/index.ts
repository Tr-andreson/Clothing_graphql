
import { Contains, MaxLength, IsBoolean, MinLength } from "class-validator";
import { ObjectType, Field, Float, InputType } from "type-graphql";
import { BrandResponseT } from "../../brand/dto";

@ObjectType()
export class ProductT {
  @Field()
  id: string;

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

  @Field(() => Float)
  quantity: number;

  @Field(_type => Float)
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
  @MaxLength(10)
  name: string;

  @Field()
  @MaxLength(10)
  slug: string;

  @Field({ nullable: true })
  @Contains('https')
  imageUrl?: string;

  @Field({ nullable: true })
  imageKey?: string;

  @Field({ nullable: true })
  @MinLength(10, {
    message: "size is too short ! Above 10 words"
  })
  description?: string;

  @Field(_type => Number)
  quantity: number;

  @Field(_type => Number)
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
