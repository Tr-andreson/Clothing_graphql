import { OrderAddress } from "@/domain/orderEntity";
import { AddressType } from "@/utils/constants/enums";

class OrderAddressSchema implements OrderAddress {
  order_id: string;
  type: AddressType;
  first_name: string;
  last_name: string;
  street_address: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  phone: string;

}
