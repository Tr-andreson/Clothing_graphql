import { Order } from "@/domain/orderEntity";
import { OrderStatus } from "@/utils/constants/enums";

class OrderSchema implements Order {
  id: string;
  order_number: string;
  user_id: string;
  status: OrderStatus;
  subtotal: number;
  tax_amount: number;
  shipping_amount: number;
  discount_amount: number;
  total: number;
  currency: string;
  customer_note?: string | undefined;
  created_at: Date;
  updated_at: Date;

}
