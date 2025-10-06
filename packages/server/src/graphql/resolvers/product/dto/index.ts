
import { ObjectType, Field, Float, InputType } from "type-graphql";

@ObjectType()
export class ProductT {
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
}

@InputType()
export class ProductInputT {

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

  @Field(_type => Number)
  quantity: number;

  @Field(_type => Number)
  price: number;

  @Field()
  taxable: boolean;

  @Field()
  isActive: boolean;

}
