import { CartStatus } from "@/utils/constants/enums";
import { ProductVariant, Product } from "./productEntity";

export interface Cart {
  id: string;
  user_id?: string;
  session_id: string;
  status: CartStatus;
  created_at: Date;
  updated_at: Date;
}

export interface CartItem {
  id: string;
  cart_id: string;
  variant_id: string;
  quantity: number;
  added_at: Date;
}

export interface CartWithItems extends Cart {
  items: (CartItem & {
    variant: ProductVariant;
    product: Product;
  })[];
  totals: {
    subtotal: number;
    discount_amount: number;
    tax_amount: number;
    shipping_amount: number;
    total: number;
  };
}

export interface Wishlist {
  id: string;
  user_id: string;
  name: string;
  is_private: boolean;
  created_at: Date;
}

export interface WishlistItem {
  id: string;
  wishlist_id: string;
  product_id: string;
  added_at: Date;
}

export interface Review {
  id: string;
  product_id: string;
  user_id: string;
  rating: number;
  title?: string;
  comment?: string;
  is_approved: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface AddToCartInput {
  cart_id: string;
  variant_id: string;
  quantity: number;
}

export interface UpdateCartItemInput {
  cart_item_id: string;
  quantity: number;
}
