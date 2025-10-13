import { VariantAttribute } from "@/domain/productEntity";

class VariantAttributeSchema implements VariantAttribute {
  variant_id: string;
  attribute_id: string;
  attribute_value_id: string;

}
