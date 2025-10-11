import { WishlistItem } from "@/domain/shoppingEntity";

class WishlistItemSchema implements WishlistItem {
  id: string;
  wishlist_id: string;
  product_id: string;
  added_at: Date;

}
