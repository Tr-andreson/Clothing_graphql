import { UserProfile } from "@/domain/userEntity";
import { UserSchema } from "./userSchema";
import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { User } from "@/domain/entities/User";

@modelOptions({ schemaOptions: { collection: "userProfile" } })
export class UserProfileSchema implements UserProfile {

  @prop()
  user_id: string;

  @prop()
  date_of_birth: Date

  @prop()
  gender: string

  @prop({ default: { size: "sm" } })
  clothing_size_preferences: Record<string, any>;

  @prop({
    default: Date.now()
  })
  created_at: Date;

  @prop()
  updated_at: Date;

}

export const UserProfileModel = getModelForClass(UserProfileSchema)


export class UserProfileRepository implements IUserRepository {
  async findAll(): Promise<User[] | any> {
    const userProfile = await UserProfileModel.find({})
    return userProfile
  }
  findByEmail(_email: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  async save(user: any): Promise<User | any> {
    await UserProfileModel.create(user)
    return "User added Succesfully"
  }
}
