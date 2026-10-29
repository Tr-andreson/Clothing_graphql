import { Field, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class HealthResponseT {
  @Field()
  status: number

  @Field()
  message: string

}
