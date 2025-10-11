import { ProductVariant } from "@/domain/productEntity";

class ProductVariantSchema implements ProductVariant {
  id: string;
  product_id: string;
  sku: string;
  price: number;
  compare_at_price?: number | undefined;
  cost_price?: number | undefined;
  barcode?: string | undefined;
  track_inventory: boolean;
  weight?: number | undefined;
  height?: number | undefined;
  width?: number | undefined;
  length?: number | undefined;
  is_active: boolean;

}
