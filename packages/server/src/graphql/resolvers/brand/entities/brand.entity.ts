import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class BrandT {
  @Field()
  id: string;

  @Field()
  name: string;
  @Field()
  slug: string;

  @Field()
  imageUrl: string;

  @Field()
  description: string;

  @Field()
  isActive: boolean;

  @Field()
  merchant: string;

}
