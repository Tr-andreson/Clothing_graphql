import { Discount } from "@/domain/promotionEntity";
import { DiscountType } from "@/utils/constants/enums";
import { prop } from "@typegoose/typegoose";

class DiscountSchema implements Discount {
  @prop({ autopopulate: true })
  id: string;

  @prop()
  code: string;

  @prop()
  type: DiscountType;

  @prop()
  value: number;

  @prop()
  minimum_order_amount?: number | undefined;

  @prop()
  maximum_discount_amount?: number | undefined;

  @prop()
  usage_limit?: number | undefined;

  @prop()
  used_count: number;

  @prop()
  start_date?: Date | undefined;

  @prop()
  end_date?: Date | undefined;

  @prop()
  is_active: boolean;

}
