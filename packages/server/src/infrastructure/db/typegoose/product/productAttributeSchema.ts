import { ProductAttribute } from "@/domain/productEntity";
import { AttributeType } from "@/utils/constants/enums";

class ProductAttributeSchema implements ProductAttribute {
  id: string;
  name: string;
  type: AttributeType;
  sort_order: number;

}
