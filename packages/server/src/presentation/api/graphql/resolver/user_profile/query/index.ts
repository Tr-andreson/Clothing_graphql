import { Field, GraphQLISODateTime, InputType, ObjectType } from "type-graphql";


@InputType()
export class UserProfileRequest {
  @Field()
  user_id: string;

  @Field(() => GraphQLISODateTime)
  date_of_birth: Date;

  @Field()
  gender?: string

  // @Field()
  // clothing_size_preferences: string

}

@ObjectType()
export class UserProfileResponse {
  @Field()
  user_id: string;

  @Field(() => Date)
  date_of_birth?: Date

  @Field()
  gender?: string

  // @Field()
  // clothing_size_preferences: String

  @Field(_type => Date)
  created_at: Date;

  // @Field(() => Date)
  // updated_at: Date;
}
