import { Wishlist } from "@/domain/shoppingEntity";

class WishlistSchema implements Wishlist {
  id: string;
  user_id: string;
  name: string;
  is_private: boolean;
  created_at: Date;

}
