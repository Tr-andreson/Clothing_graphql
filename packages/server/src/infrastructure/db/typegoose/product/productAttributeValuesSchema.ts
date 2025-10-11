import { ProductAttributeValue } from "@/domain/productEntity";

class ProductAttributeValueSchema implements ProductAttributeValue {
  id: string;
  attribute_id: string;
  value: string;
  display_value: string;
  swatch_color?: string | undefined;
  image_url?: string | undefined;

}
