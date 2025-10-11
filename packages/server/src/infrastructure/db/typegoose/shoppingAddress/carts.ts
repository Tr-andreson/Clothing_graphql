import { Cart } from "@/domain/shoppingEntity";
import { CartStatus } from "@/utils/constants/enums";
import { prop } from "@typegoose/typegoose";

class CartSchema implements Cart {
  @prop({ autopopulate: true })
  id: string;

  @prop()
  user_id?: string

  @prop()
  session_id: string;

  @prop()
  status: CartStatus;

  @prop()
  created_at: Date;

  @prop()
  updated_at: Date;

}
