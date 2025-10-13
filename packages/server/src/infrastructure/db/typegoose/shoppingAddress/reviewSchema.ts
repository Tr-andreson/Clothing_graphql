import { Review } from "@/domain/shoppingEntity";

class ReviewsSchema implements Review {
  id: string;
  product_id: string;
  user_id: string;
  rating: number;
  title?: string | undefined;
  comment?: string | undefined;
  is_approved: boolean;
  created_at: Date;
  updated_at: Date;

}
