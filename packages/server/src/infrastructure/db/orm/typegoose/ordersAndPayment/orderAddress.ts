import { OrderAddress } from "@/domain/orderEntity";
import { AddressType } from "@/utils/constants/enums";
import { prop } from "@typegoose/typegoose";

class OrderAddressSchema implements OrderAddress {
  @prop()
  order_id: string;

  @prop()
  type: AddressType;

  @prop()
  first_name: string;

  @prop()
  last_name: string;

  @prop()
  street_address: string;

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

}
