import { VariantAttribute } from "@/domain/productEntity";
import { prop } from "@typegoose/typegoose";

class VariantAttributeSchema implements VariantAttribute {
  @prop()
  variant_id: string;

  @prop()
  attribute_id: string;

  @prop()
  attribute_value_id: string;

}
