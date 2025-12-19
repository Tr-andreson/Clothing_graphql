import { ProductImage } from "@/domain/productEntity";
import { prop } from "@typegoose/typegoose";

class ProductImagesSchema implements ProductImage {

  @prop({ autopopulate: true })
  id: string;

  @prop()
  product_id: string;

  @prop()
  variant_id?: string | undefined;

  @prop()
  url: string;

  @prop()
  alt_text?: string | undefined;

  @prop()
  sort_order: number;

  @prop()
  is_primary: boolean;
}
