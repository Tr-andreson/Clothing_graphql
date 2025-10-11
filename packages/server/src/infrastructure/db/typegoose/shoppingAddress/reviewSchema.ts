import { Review } from "@/domain/shoppingEntity";

class ReviewsSchema implements Review {
  id: string;
  wishlist_id: string;
  product_id: string;
  added_at: Date;

}
