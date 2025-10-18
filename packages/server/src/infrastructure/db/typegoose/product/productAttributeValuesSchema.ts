import { ProductAttributeValue } from "@/domain/productEntity";
import { prop } from "@typegoose/typegoose";

class ProductAttributeValueSchema implements ProductAttributeValue {

  @prop({ autopopulate: true })
  id: string;

  @prop()
  attribute_id: string;

  @prop()
  value: string;

  @prop()
  display_value: string;

  @prop()
  swatch_color?: string | undefined;

  @prop()
  image_url?: string | undefined;

}
