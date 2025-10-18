import { ProductAttribute } from "@/domain/productEntity";
import { AttributeType } from "@/utils/constants/enums";
import { prop } from "@typegoose/typegoose";

class ProductAttributeSchema implements ProductAttribute {

  @prop({ autopopulate: true })
  id: string;

  @prop()
  name: string;

  @prop()
  type: AttributeType;

  @prop()
  sort_order: number;
}
