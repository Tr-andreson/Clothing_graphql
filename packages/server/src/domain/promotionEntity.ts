import { DiscountType } from "@/utils/constants/enums";

export interface Discount {
  id: string;
  code: string;
  type: DiscountType;
  value: number;
  minimum_order_amount?: number;
  maximum_discount_amount?: number;
  usage_limit?: number;
  used_count: number;
  start_date?: Date;
  end_date?: Date;
  is_active: boolean;
}

export interface CreateDiscountInput {
  code: string;
  type: DiscountType;
  value: number;
  minimum_order_amount?: number;
  maximum_discount_amount?: number;
  usage_limit?: number;
  start_date?: Date;
  end_date?: Date;
  is_active?: boolean;
}

export interface ApplyDiscountResult {
  success: boolean;
  discount_amount: number;
  message?: string;
  discount?: Discount;
}
