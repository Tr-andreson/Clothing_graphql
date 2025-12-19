import { WishlistItem } from "@/domain/shoppingEntity";
import { prop } from "@typegoose/typegoose";

class WishlistItemSchema implements WishlistItem {
  @prop({ autopopulate: true })
  id: string;

  @prop()
  wishlist_id: string;

  @prop()
  product_id: string;

  @prop()
  added_at: Date;

}

