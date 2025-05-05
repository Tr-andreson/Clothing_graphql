import { InputType, Field } from "type-graphql";

// type 
@InputType()
export class BrandInputT {
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
}
