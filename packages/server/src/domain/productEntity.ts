import { AttributeType, Gender, ProductStatus } from "@/utils/constants/enums";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parent_id?: string;
  image_url?: string;
  meta_title?: string;
  meta_description?: string;
  is_active: boolean;
  sort_order: number;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
  is_active: boolean;
  start_date?: Date;
  end_date?: Date;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  description?: string;
  logo_url?: string;
  is_active: boolean;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  description?: string;
  care_instructions?: string;
  material_composition?: string;
  brand_id?: string;
  category_id: string;
  collection_id?: string;
  status: ProductStatus;
  gender: Gender;
  season?: string;
  tags: string[];
  meta_title?: string;
  meta_description?: string;
  created_at: Date;
  updated_at: Date;
}

export interface ProductAttribute {
  id: string;
  name: string;
  type: AttributeType;
  sort_order: number;
}

export interface ProductAttributeValue {
  id: string;
  attribute_id: string;
  value: string;
  display_value: string;
  swatch_color?: string;
  image_url?: string;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  sku: string;
  price: number;
  compare_at_price?: number;
  cost_price?: number;
  barcode?: string;
  track_inventory: boolean;
  weight?: number;
  height?: number;
  width?: number;
  length?: number;
  is_active: boolean;
}

export interface VariantAttribute {
  variant_id: string;
  attribute_id: string;
  attribute_value_id: string;
}

export interface Inventory {
  id: string;
  variant_id: string;
  quantity_available: number;
  quantity_reserved: number;
  low_stock_threshold: number;
  restock_date?: Date;
}

export interface ProductImage {
  id: string;
  product_id: string;
  variant_id?: string;
  url: string;
  alt_text?: string;
  sort_order: number;
  is_primary: boolean;
}

// Input types for product operations
export interface CreateProductInput {
  sku: string;
  name: string;
  description?: string;
  care_instructions?: string;
  material_composition?: string;
  brand_id?: string;
  category_id: string;
  collection_id?: string;
  status?: ProductStatus;
  gender: Gender;
  season?: string;
  tags?: string[];
  meta_title?: string;
  meta_description?: string;
}

export interface CreateVariantInput {
  product_id: string;
  sku: string;
  price: number;
  compare_at_price?: number;
  cost_price?: number;
  barcode?: string;
  track_inventory?: boolean;
  weight?: number;
  attributes: Array<{
    attribute_id: string;
    attribute_value_id: string;
  }>;
}
