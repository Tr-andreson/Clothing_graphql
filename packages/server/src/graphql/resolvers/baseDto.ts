import { ObjectType, Field } from "type-graphql"

@ObjectType({ description: "Base Dto" })
export class BaseResponseDto {
  @Field()
  status: number

  @Field()
  message: string

}
