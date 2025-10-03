import { InputType, Field } from "type-graphql";


@InputType()
export class ProductInputT {
  @Field()
  sku: string;

  @Field()
  name: string;

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


@InputType()
export class UploadFileT {
  @Field()
  name: string

  @Field()
  email: string

  @Field()
  password: string
}
