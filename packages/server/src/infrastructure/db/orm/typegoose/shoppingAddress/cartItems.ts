import { CartItem } from "@/domain/shoppingEntity";
import { prop } from "@typegoose/typegoose";

class CartItemsSchema implements CartItem {
  @prop({ autopopulate: true })
  id: string;

  @prop()
  cart_id: string;

  @prop()
  variant_id: string;

  @prop()
  quantity: number;

  @prop()
  added_at: Date;

}
