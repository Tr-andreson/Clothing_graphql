import { Review } from "@/domain/shoppingEntity";
import { prop } from "@typegoose/typegoose";

class ReviewsSchema implements Review {
  @prop({ autopopulate: true })
  id: string;
  @prop()
  product_id: string;

  @prop()
  created_at: Date;

  @prop()
  updated_at: Date;

  @prop()
  user_id: string;

  @prop()
  rating: number;

  @prop()
  title: string

  @prop()
  comment: string

  @prop()
  is_approved: boolean;

}
