import { User } from "@/domain/entities/User";
import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { UserAddress } from "@/domain/userEntity";
import { AddressType } from "@/utils/constants/enums";
import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: "userAddress" } })
export class UserAddressSchema implements UserAddress {
  @prop({ autopopulate: true })
  id: string;

  @prop({ required: true })
  user_id: string;

  @prop({ required: true })
  type: AddressType;

  @prop({ default: "NA" })
  first_name: string;

  @prop({ default: "NA" })
  last_name: string;

  @prop()
  street_address: string;

  @prop()
  apartment: string;

  @prop({ default: "City" })
  city: string;

  @prop()
  state: string;

  @prop()
  country: string;

  @prop()
  zip_code: string;

  @prop()
  phone: string;

  @prop()
  is_default: boolean;
}


export const UserAddressModel = getModelForClass(UserAddressSchema)


export class UserAddressRepository implements IUserRepository {
  async findAll(): Promise<User[] | any> {
    const product = await UserAddressModel.find({})
    return product
  }
  findByEmail(_email: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  async save(user: any): Promise<User | any> {
    await UserAddressModel.create(user)
    return "Product added succesfully"
  }

}
