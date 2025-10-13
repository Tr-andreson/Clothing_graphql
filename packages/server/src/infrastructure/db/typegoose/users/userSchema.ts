import { User } from "@/domain/entities/User";
import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { User as UserEntity } from "@/domain/userEntity";
import { UserRole } from "@/utils/constants/enums"
import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: "Users" } })
export class UserSchema implements UserEntity {
  @prop({ autopopulate: true })
  id: string;

  @prop({ unique: true, required: true })
  email: string;

  @prop({ unique: true, required: true })
  password_hash: string;

  @prop()
  first_name: string;

  @prop()
  last_name: string;

  @prop()
  phone?: string


  @prop({ default: false })
  email_verified: boolean;

  @prop({ default: "user role" })
  role: UserRole;

  @prop({ default: Date.now() })
  created_at: Date;

  @prop()
  updated_at: Date;
}

export const UserModel = getModelForClass(UserSchema);


export class UserRepository implements IUserRepository {
  async save(user: any): Promise<User | string> {
    const product = await UserModel.create(user)
    await product.save()
    return "Product added succesfully"
  }
  async findAll(): Promise<User[] | any> {
    const products = await UserModel.aggregate([
      {
        $lookup: {
          from: "userAddress",
          localField: "_id",
          foreignField: "user_id",
          as: "address"
        }
      },
      {
        $lookup: {
          from: "userProfile",
          localField: "_id",
          foreignField: "user_id",
          as: "profile"
        }
      },


    ])
    return products
  }

  async findByEmail(email: string): Promise<User | null | any> {
    const productById = await UserModel.findOne({
      email
    })
    return productById
  }

  async findByObject(props: any) {
    const product = await UserModel.find().select(props)
    return product
  }
}
