import { UserAddress } from "@/domain/userEntity";
import { AddressType } from "@/utils/constants/enums";
import { getModelForClass, prop } from "@typegoose/typegoose";

export class UserAddressSchema implements UserAddress {
  @prop()
  id: string;

  @prop()
  user_id: string;

  @prop()
  type: AddressType;

  @prop()
  first_name: string;

  @prop()
  last_name: string;

  @prop()
  street_address: string;

  @prop()
  apartment?: string | undefined;

  @prop()
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
