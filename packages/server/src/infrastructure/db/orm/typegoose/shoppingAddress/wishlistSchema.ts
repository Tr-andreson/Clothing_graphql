import { Wishlist } from "@/domain/shoppingEntity";
import { prop } from "@typegoose/typegoose";

class WishlistSchema implements Wishlist {
  @prop({ autopopulate: true })
  id: string;
  @prop()
  user_id: string;
  @prop()
  name: string;

  @prop()
  is_private: boolean;

  @prop()
  created_at: Date;

}
