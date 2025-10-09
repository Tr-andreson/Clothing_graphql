import { UserProfile } from "@/domain/userEntity";
import { UserSchema } from "./userSchema";
import { getModelForClass, prop } from "@typegoose/typegoose";

export class UserProfileSchema implements UserProfile {
  @prop()
  user_id: string;

  @prop()
  date_of_birth?: Date | undefined;

  @prop()
  gender?: string | undefined;

  @prop()
  clothing_size_preferences: Record<string, any>;

  @prop()
  created_at: Date;

  @prop()
  updated_at: Date;

}

export const UserProfileModel = getModelForClass(UserProfileSchema)
