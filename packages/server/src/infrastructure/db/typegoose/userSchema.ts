import { User } from "@/domain/entities/User";
import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { User as UserEntity } from "@/domain/userEntity";
import { UserRole } from "@/utils/constants/enums"
import { getModelForClass, prop } from "@typegoose/typegoose";

export class UserSchema implements UserEntity {
  @prop({ required: true })
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
  phone?: string | undefined;

  @prop({ default: Date.now() })
  created_at: Date;

  @prop()
  updated_at: Date;

  @prop()
  email_verified: boolean;

  @prop()
  role: UserRole;
}

export const UserModel = getModelForClass(UserSchema);


export class UserRepository implements IUserRepository {
  async save(user: User): Promise<User | string> {
    const product = await UserModel.create(user)
    await product.save()
    return "Product added succesfully"
  }
  async findAll(): Promise<User[] | any> {
    const products = await UserModel.find({})
    return products
  }

  async findByEmail(email: string): Promise<User | null | any> {
    const productById = await UserModel.findOne({
      email
    })
    return productById
  }
}
