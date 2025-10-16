import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class BrandResponseT {
  @Field(() => ID)
  _id: string

  @Field()
  name: string

  @Field()
  slug: string

  @Field({
    nullable: true
  })
  imageUrl: string

  @Field()
  description: string

  @Field(_type => Boolean)
  isActive: boolean
}


@InputType()
export class BrandRequestT {
  @Field()
  name: string

  @Field()
  slug: string

  @Field()
  imageUrl: string

  @Field()
  description: string

  @Field(_type => Boolean)
  isActive: boolean
}
