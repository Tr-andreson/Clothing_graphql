import { ProductVariant } from "@/domain/productEntity";
import { prop } from "@typegoose/typegoose";

class ProductVariantSchema implements ProductVariant {

  @prop({ autopopulate: true })
  id: string;

  @prop()
  product_id: string;

  @prop()
  sku: string;

  @prop()
  price: number;

  @prop()
  compare_at_price?: number | undefined;

  @prop()
  cost_price?: number | undefined;

  @prop()
  barcode?: string | undefined;

  @prop()
  track_inventory: boolean;

  @prop()
  weight?: number | undefined;

  @prop()
  height?: number | undefined;

  @prop()
  width?: number | undefined;

  @prop()
  length?: number | undefined;

  @prop()
  is_active: boolean;

}
