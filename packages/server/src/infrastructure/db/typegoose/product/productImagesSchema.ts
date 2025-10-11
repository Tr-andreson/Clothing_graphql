import { ProductImage } from "@/domain/productEntity";

class ProductImagesSchema implements ProductImage {
  id: string;
  product_id: string;
  variant_id?: string | undefined;
  url: string;
  alt_text?: string | undefined;
  sort_order: number;
  is_primary: boolean;
}
