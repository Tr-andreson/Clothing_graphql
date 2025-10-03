import { ObjectType, Field, ID } from "type-graphql";


@ObjectType()
export class ProductT {
  @Field(() => ID)
  id: string;

  @Field()
  sku: string;


  @Field()
  name: string;


  @Field()
  slug: string;

  @Field()
  imageUrl: string;

  @Field()
  imageKey: string;

  @Field()
  brand: string;

  @Field()
  description: string;

  @Field()
  quantity: number;

  @Field()
  price: number;

  @Field()
  taxable: boolean;

  @Field()
  isActive: boolean;
}
