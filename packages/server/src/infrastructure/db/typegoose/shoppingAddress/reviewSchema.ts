import { Review } from "@/domain/shoppingEntity";

class ReviewsSchema implements Review {
  id: string;
  product_id: string;
  created_at: Date;
  updated_at: Date;
  user_id: string;
  rating: number;
  title?: string | undefined;
  comment?: string | undefined;
  is_approved: boolean;

}
